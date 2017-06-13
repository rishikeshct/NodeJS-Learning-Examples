var http = require('http');
 var fs = require('fs');

var server = http.createServer(function(req,resp){
  var myReadStream = fs.createReadStream(__dirname+'/readstream.txt','utf8');  //_dirname return the current directory

  //req object contain request related info
  //resp object contain response related info
  resp.writeHead(200,{'Content-Type': 'text/plain'})
  myReadStream.pipe(resp);
});
 server.listen(3000,'127.0.0.1');
