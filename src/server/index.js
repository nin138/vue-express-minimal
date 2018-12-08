const express = require("express");
const server = express();
const createRenderer = require("vue-server-renderer").createRenderer;
const path = require("path");

const renderer = createRenderer({
  template: require("fs")
    .readFileSync(path.resolve("./static/index.html"), "utf-8")
    .replace('<div id="app"></div>', "<!--vue-ssr-outlet-->"),
});

server.use(express.static("./static", { index: false }));

server.use("/api/v1", require("./api/v1/router"));

server.get("*", (req, res) => {
  console.log(req.url);
  const context = {
    url: req.url,
  };
  const createApp = require("../../dist/ssr.js").default;

  createApp(context)
    .then(app => {
      renderer.renderToString(app, (_, html) => {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(html);
      });
    })
    .catch(e => {
      if (e.message === "404") res.status(404).end("Page not found");
      else res.status(500).end("Internal Server Error");
    });
});

const PORT = process.env.NODE_ENV === "development" ? 80 : process.env.PART || 80;
server.listen(PORT);
