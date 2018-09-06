var app = angular.module('shinobiApp',[]);

app.controller('ninjaCtrl',function($scope){
    $scope.ninja = ninjaData;
    $scope.datos = {};
    $scope.mostrar = false;

    $scope.funcionEditar = function(){
        angular.copy($scope.ninja,$scope.datos);
        $scope.mostrar = true;
    }

    $scope.funcionGuardar = function(){
        angular.copy($scope.datos,$scope.ninja);
        $scope.mostrar = false;
    }

    $scope.funcionCancelar = function(){
        $scope.datos = {};
        $scope.mostrar = false;
    }

});

var ninjaData = {
    nombre: "Naruto",
    aldea: "Konoha",
    bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quae iure nihil sit dolor, officia architecto quam dignissimos. Voluptates exercitationem adipisci, provident recusandae nesciunt quisquam consequatur culpa vel a reprehenderit?",
    manga: "Capitulo #1",
    edad: 32,
    img: "img/naruto.png"
}