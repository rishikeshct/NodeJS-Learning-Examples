/* The node.js "util" module provides "utility" functions that are potentially helpful to a developer but don't really belong anywhere else. (It is, in fact, a general programming convention to have a module or namespace named "util" for general purpose utility functions.) You would use the functions in the "util" module if you had a need to use any of them.

For example, if you need to test if an arbitrary value is an array you could write your own function or you could use util.isArray(...):

function myIsArray(o) {
  return (typeof(o)==='object') && (o.constructor === Array);
}

// Or...
var util = require('util');
if (util.isArray(someValue)) {
  // ...
}
In general, after reading the documentation for any of the utility functions you can make an assessment about whether or not you could, or would, like to use them in your own program. If you decide that doing so is a good idea then you can do it. */

var events = require('events');
var util = require('util');

var person = function(name){
  this.name = name;
};

util.inherits(person,events.EventEmitter);  //Object person inherits the EventEmitter. all Object created through person will have EventEmitter attached.

var james = new person('james');
var mary = new person('mary');
var rishi = new person('rishi');

var people = [james,mary,rishi];  //adding the objects of person to which we have added EventEmitter to people object

people.forEach(function(person){
  person.on('speak',function(msg){
      console.log(person.name + " said " + msg);

  });
});

james.emit('speak',"hi");
