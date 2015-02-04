var finalhandler = require('finalhandler'),
    http = require('http'),
    serveStatic = require('serve-static');

/**
 * Run a web server for static content.
 */
module.exports = function(port, root, index) {
  var serve = serveStatic(root, { index: [index] }),
      server = http.createServer(function(req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
  });

  server.listen(port);
}
