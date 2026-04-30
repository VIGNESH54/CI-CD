const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from Kubernetes CI/CD 🚀");
}).listen(3000, "0.0.0.0");