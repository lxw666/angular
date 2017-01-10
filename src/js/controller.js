var app = angular.module('myApp',[]);
app.controller('myCtrl',['$scope',function($scope){
	$scope.firstName = 'John';
	$scope.lastName = 'Doe';
}]);
var nameApp = angular.module('nameApp',[]);
nameApp.controller('namesCtrl',['$scope',function($scope){
	$scope.names = [
		{name: 'Jani',country: 'Norway'},
		{name: 'Hege',country: 'Sweden'},
        {name: 'Kai',country: 'Denmark'}
	]
}]);
angular.bootstrap(document.getElementById('nameApp'),['nameApp']);//多个ng-app需要手动加载