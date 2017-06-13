var events = require('events');
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(hi){

  console.log("Hi hello");

});

myEmitter.emit('someEvent');
