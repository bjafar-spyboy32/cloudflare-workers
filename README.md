# Cloudflare Workers

This repository contains a starter Cloudflare Workers project for Luiz B Tech Solutions.

Quick start

1. Install Wrangler (Cloudflare CLI)

   npm install -g wrangler

2. Authenticate wrangler with your Cloudflare account and configure an account_id:

   wrangler login
   # OR for API token:
   wrangler whoami

3. Update wrangler.toml

- Open wrangler.toml and set `account_id` to your Cloudflare account ID.
- Configure `route` and `zone_id` under the appropriate environment if you want to publish to a custom domain.

4. Development

   npm install
   npm run start

This runs `wrangler dev` and opens a local preview of your Worker.

5. Deploy

   npm run deploy

This runs `wrangler publish` and deploys to Workers (using the `account_id` in wrangler.toml).

Files created

- `wrangler.toml` - wrangler configuration (update `account_id`).
- `package.json` - scripts for dev/deploy and devDependencies.
- `src/index.js` - example Worker with an HTML response and a simple JSON API at `/api/hello`.

Notes

- Replace placeholders in wrangler.toml with your Cloudflare account details before publishing.
- If you want GitHub Actions deployment, I can add a workflow that uses a Cloudflare API token — tell me if you'd like that.
