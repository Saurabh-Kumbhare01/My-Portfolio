import { Resend } from 'resend';

// Simple in-memory rate limiting map (IP -> timestamp)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

// Helper to escape HTML characters to prevent XSS in email clients
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Only POST requests are accepted.'
    });
  }

  // 2. Client IP Rate Limiting & Spam Protection
  const clientIp =
    req.headers['x-forwarded-for'] ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'unknown-ip';

  const now = Date.now();
  const clientHistory = rateLimitMap.get(clientIp) || [];
  const recentHistory = clientHistory.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recentHistory.length >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please wait a minute before sending another message.'
    });
  }
  rateLimitMap.set(clientIp, [...recentHistory, now]);

  try {
    // Parse body if not automatically parsed
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        return res.status(400).json({ success: false, error: 'Invalid JSON payload.' });
      }
    }

    if (!body || typeof body !== 'object') {
      return res.status(400).json({ success: false, error: 'Request body is required.' });
    }

    const { name, email, subject, message, _gotcha, formLoadedAt } = body;

    // 3. Honeypot check (hidden field for automated spam bots)
    if (_gotcha) {
      // Silently return success to waste bot time without sending email
      return res.status(200).json({
        success: true,
        message: 'Message delivered successfully.'
      });
    }

    // 4. Time-trap spam protection (bots submit forms in < 1 second)
    if (formLoadedAt && now - Number(formLoadedAt) < 1000) {
      return res.status(200).json({
        success: true,
        message: 'Message delivered successfully.'
      });
    }

    // 5. Strict Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Please provide a valid name (at least 2 characters).' });
    }
    if (name.trim().length > 100) {
      return res.status(400).json({ success: false, error: 'Name must not exceed 100 characters.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Please provide a subject line.' });
    }
    if (subject.trim().length > 150) {
      return res.status(400).json({ success: false, error: 'Subject must not exceed 150 characters.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({ success: false, error: 'Message must be at least 10 characters long.' });
    }
    if (message.trim().length > 5000) {
      return res.status(400).json({ success: false, error: 'Message must not exceed 5000 characters.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const isPlaceholderKey =
      !apiKey ||
      apiKey === 're_your_api_key_here' ||
      apiKey.includes('your_api_key') ||
      apiKey.trim() === '';

    // 6. Seamless Demo/Development Mode when API key has not yet been pasted
    if (isPlaceholderKey) {
      console.log('----------------------------------------------------');
      console.log('[Notice] RESEND_API_KEY is currently a placeholder.');
      console.log('To deliver real emails to your inbox:');
      console.log('1. Go to https://resend.com/api-keys');
      console.log('2. Copy your key (starts with "re_")');
      console.log('3. Paste it into your .env file as RESEND_API_KEY=re_...');
      console.log(`Captured message from: ${name.trim()} (${email.trim()}) - "${subject.trim()}"`);
      console.log('----------------------------------------------------');

      return res.status(200).json({
        success: true,
        message: 'Message delivered! (Demo Mode: Add your live RESEND_API_KEY in .env to receive real emails in your inbox)',
        isDemo: true
      });
    }

    // 7. Live Resend Client Execution
    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeSubject = escapeHtml(subject.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br/>');

    // Recipient & Sender configuration
    const toEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'kumbharesaurabh279@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    const submissionTime = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    // 8. Send Email via Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email.trim(),
      subject: `[Portfolio Inquiry] ${subject.trim()} - from ${name.trim()}`,
      text: `New message from Portfolio Contact Form:
      
Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject.trim()}
Time: ${submissionTime} IST

Message:
${message.trim()}

---
Reply directly to this email to contact ${name.trim()}.`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #f1f5f9; padding: 24px; margin: 0; }
              .card { max-width: 600px; margin: 0 auto; background: #111827; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
              .header { background: linear-gradient(135deg, #00f5d4 0%, #38bdf8 50%, #6366f1 100%); padding: 24px 32px; color: #020617; }
              .header h2 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
              .header p { margin: 4px 0 0; font-size: 13px; font-weight: 600; opacity: 0.85; }
              .content { padding: 32px; }
              .field { margin-bottom: 20px; }
              .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; font-weight: 700; margin-bottom: 4px; }
              .value { font-size: 15px; color: #f8fafc; font-weight: 500; }
              .message-box { background: #030712; border: 1px solid #1e293b; border-radius: 12px; padding: 18px; margin-top: 8px; font-size: 14px; line-height: 1.6; color: #e2e8f0; }
              .footer { padding: 20px 32px; background: #080c16; border-top: 1px solid #1e293b; font-size: 12px; color: #64748b; text-align: center; }
              .footer a { color: #38bdf8; text-decoration: none; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h2>New Portfolio Transmission</h2>
                <p>Direct visitor communication via Saurabh Kumbhare's Portfolio</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Sender Name</div>
                  <div class="value">${safeName}</div>
                </div>
                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${safeEmail}" style="color: #00f5d4; text-decoration: none;">${safeEmail}</a></div>
                </div>
                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${safeSubject}</div>
                </div>
                <div class="field">
                  <div class="label">Timestamp</div>
                  <div class="value" style="font-size: 13px; color: #94a3b8;">${submissionTime} (IST)</div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">${safeMessage}</div>
                </div>
              </div>
              <div class="footer">
                Hit <strong>Reply</strong> in your email client to respond directly to ${safeName} (${safeEmail}).
              </div>
            </div>
          </body>
        </html>
      `
    });

    if (error) {
      console.error('Resend API Error:', error);
      let userError = error.message || 'Failed to send email via Resend.';
      if (error.statusCode === 401 || (error.message && error.message.toLowerCase().includes('api key'))) {
        userError = 'Invalid Resend API Key. Please verify your RESEND_API_KEY in .env or at https://resend.com/api-keys';
      }
      return res.status(error.statusCode || 500).json({
        success: false,
        error: userError
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Message transmitted successfully via Resend!',
      id: data?.id
    });
  } catch (err) {
    console.error('Unhandled server error in /api/send:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request.'
    });
  }
}
