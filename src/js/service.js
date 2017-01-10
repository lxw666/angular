var app = angular.module('myApp',[]);
app.controller('customerCtrl',['$scope','$location','$http','$timeout','$interval',function($scope,$location,$http,$timeout,$interval){
	$scope.myUrl = $location.absUrl();
	$http.get('welcome.json').then(function(response){
		$scope.myWelcome = response.data;
	});
	$scope.myHeader = "hello world";
	$timeout(function(){
		$scope.myHeader = "How are you today?";
	},3000);
	$scope.theTime = new Date().toLocaleTimeString();
	$interval(function(){
		$scope.theTime = new Date().toLocaleTimeString();
	},1000);
}])