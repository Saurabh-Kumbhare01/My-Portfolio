import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Local development API middleware for /api/send
const apiDevServerPlugin = (env) => ({
  name: 'api-dev-server',
  configureServer(server) {
    server.middlewares.use('/api/send', async (req, res) => {
      if (req.method !== 'POST') {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
        return;
      }

      // Populate environment variables for local dev execution
      Object.assign(process.env, env);

      let rawBody = '';
      req.on('data', (chunk) => {
        rawBody += chunk;
      });

      req.on('end', async () => {
        try {
          req.body = rawBody ? JSON.parse(rawBody) : {};
        } catch (e) {
          req.body = {};
        }

        // Mock Vercel response helper methods
        res.status = (statusCode) => {
          res.statusCode = statusCode;
          return res;
        };

        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
          return res;
        };

        try {
          const { default: handler } = await import('./api/send.js');
          await handler(req, res);
        } catch (err) {
          console.error('Local API Handler Error:', err);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(
            JSON.stringify({
              success: false,
              error: err.message || 'Internal Server Error'
            })
          );
        }
      });
    });
  },
});

export default defineConfig(({ mode }) => {
  // Load environment variables (including those without VITE_ prefix like RESEND_API_KEY)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), apiDevServerPlugin(env)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5173,
    },
  };
});
