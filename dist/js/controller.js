var app=angular.module("myApp",[]);app.controller("myCtrl",["$scope",function(a){a.firstName="John",a.lastName="Doe"}]);var nameApp=angular.module("nameApp",[]);nameApp.controller("namesCtrl",["$scope",function(a){a.names=[{name:"Jani",country:"Norway"},{name:"Hege",country:"Sweden"},{name:"Kai",country:"Denmark"}]}]),angular.bootstrap(document.getElementById("nameApp"),["nameApp"]);