var app = angular.module('myApp',[]);

app.controller('mainCtrl',['$scope','$http',function($scope,$http){
  $scope.profesores = {};
  $http.get('json/profesores.json').then(function(data){
    console.log(data);
  });

}]);