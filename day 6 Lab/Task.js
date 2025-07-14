const fs = require("fs");
const http = require("http");
const url = require("url");
const nunjucks = require("nunjucks");

// Initialize Nunjucks
nunjucks.configure({ autoescape: true });

// Load data
const data = fs.readFileSync("./data.json", "utf-8");
const posts = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Homepage - Show all posts
  if (pathname === "/" || pathname === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const html = nunjucks.render("temp.html", { posts });
    res.end(html);
  }

  // API endpoint - Return JSON data
  else if (pathname === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });

    // Handle single post request
    if (query.id) {
      const post = posts.find((p) => p.id == query.id); // Use == for loose comparison
      res.end(JSON.stringify(post || null));
    }
    // Handle all posts request
    else {
      res.end(JSON.stringify(posts));
    }
  }

  // 404 Not Found
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server running at http://localhost:8000");
});
