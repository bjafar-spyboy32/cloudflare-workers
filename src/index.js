export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Simple JSON API route
    if (url.pathname === "/api/hello") {
      return new Response(JSON.stringify({
        message: "Hello from Luiz B Tech Solutions Cloudflare Worker!"
      }), {
        headers: { "Content-Type": "application/json; charset=utf-8" }
      });
    }

    // Default HTML response
    const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Cloudflare Worker</title>
    <style>body{font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:720px;margin:4rem auto;padding:1rem}</style>
  </head>
  <body>
    <h1>Hello from Luiz B Tech Solutions Cloudflare Worker!</h1>
    <p>Path: ${url.pathname}</p>
    <p>Try the JSON API: <a href="/api/hello">/api/hello</a></p>
  </body>
</html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
