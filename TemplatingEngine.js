var express = require('express');
var app = express();
app.set('view engine','ejs');
app.get('/',function(req,resp){
  resp.send("Hi");
});

app.get('/contact',function(req,resp){
  resp.send("Hi Rishi");
});

app.get('/profile/:id',function(req,resp){
  var data = {age:20,job:"ninja",hobbies : ["Cricket","Coding","Football"]};
  resp.render('profile',{person : req.params.id,data:data});

});
app.listen(3000);
