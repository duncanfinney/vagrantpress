var tinylr = require('tiny-lr');

// standard LiveReload port
var port = 35729;

// tinylr(opts) => new tinylr.Server(opts);
tinylr().listen(port, function() {
  console.log('... Listening on %s ...', port);
})
