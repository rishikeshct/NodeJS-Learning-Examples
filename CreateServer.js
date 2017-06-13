var http = require('http');

var server = http.createServer(function(req,resp){

  //req object contain request related info
  //resp object contain response related info
  resp.writeHead(200,{'Content-Type': 'text/plain'})
  resp.end('hey world fdsd');
});
 server.listen(3000,'127.0.0.1');
