
setTimeout(function(){
  console.log("fdsffrefefer");
},500);

var time=0;
var timer = setInterval(function(){
  time+=2;
  console.log(time+"fdsf");
  if(time>5){ 
    clearInterval(timer);
  }
},1000);

console.log(__dirname);
console.log(__filename);
