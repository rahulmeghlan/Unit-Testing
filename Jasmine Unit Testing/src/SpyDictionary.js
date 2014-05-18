/**
 * Created by Rahul on 5/18/2014.
 *
 * This contains the eg to show the use of spy in jasmine
 */
var Dictionary = function(){};

Dictionary.prototype.hello = function(){
    return "hello";
};

Dictionary.prototype.world = function(){
   return "world";
};

var Person = function(){};

Person.prototype.sayHelloWorld = function(dict){
  return  dict.hello() + " " + dict.world();
};

var dictionary = new Dictionary();
var person = new Person();
person.sayHelloWorld(dictionary);