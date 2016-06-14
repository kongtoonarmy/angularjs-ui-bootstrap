// app.js
var myApp = angular.module('myApp', ['ui.bootstrap']);

myApp.controller('PopoverDemoCtrl', ['$scope', function AppCtrl($scope) {
    $scope.title = "Welcome to app";
}]);
