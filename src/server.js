const http = require("http");

function createServer(config = {}) {
  const { buildNumber = "n/a" } = config;

  const server = http.createServer((req, res) => {
    console.log(`Received request ${req.method.toUpperCase()} ${req.url}`);
    res.writeHead(200, "OK");
    res.write(
      Buffer.from(
        `Hello World! Build number ${buildNumber}\n Modified a second time, now using github ci/cd!`
      )
    );
    res.end();
  });

  return server;
}

module.exports = createServer;
