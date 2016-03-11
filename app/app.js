// app.js
var myApp = angular.module('myApp', ['ui.bootstrap']);

myApp.controller('AppCtrl', ['$scope', function AppCtrl($scope) {
    $scope.title = "Welcome to app";
}]);
