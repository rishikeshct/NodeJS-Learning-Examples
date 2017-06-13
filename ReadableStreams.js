var fs = require('fs');
var http = require('http');

var myReadStream = fs.createReadStream(__dirname+'/readstream.txt','utf8');  //_dirname return the current directory

var myWriteStream = fs.createWriteStream(__dirname+'/writestream.txt');
//to listen for a chunk

myReadStream.on('data', function(chunk){
  console.log("new chunk received");
  console.log(chunk);
  myWriteStream.write(chunk);
});
