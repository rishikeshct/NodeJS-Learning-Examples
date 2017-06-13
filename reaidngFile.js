var fs = require('fs');

/*var read = fs.readFileSync('example.txt','utf8');  //synchronous operation
console.log(read);

fs.writeFileSync('write.txt',read);
*/

fs.readFile('example.txt','utf8',function(err,data){  //Asynchronous so need callback function to process it

  fs.writeFile('write.txt',data);
});
  console.log("Async");
