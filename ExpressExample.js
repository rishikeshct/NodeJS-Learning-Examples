var express = require('express');
var app = express();

app.get('/',function(req,resp){
  resp.send("Hi");
});

app.get('/contact',function(req,resp){
  resp.send("Hi Rishi");
});

app.get('/profile/:id',function(req,resp){
  resp.send("Hi rishi your id is " + req.params.id);
});
app.listen(3000);
