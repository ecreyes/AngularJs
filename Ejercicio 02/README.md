# Ejercicio 02

## Crear archivo de configuracion maestro.
En la carpeta `js` crear un archivo `app.js`, este archivo va a tener las directivas de la aplicacion:
```typescript
var app = angular.module('shinobiApp',[]);
```
El primer parámetro es el nombre de la aplicación, el segundo es un arreglo con las directivas a utilizar.
El nombre tiene que ser asignado en el html en la parte de ng app:
```typescript
<html lang="en" ng-app="shinobiApp">
```
Tambien debe ser importado en el HTML:
```typescript
<script src="./js/app.js"></script>
```
Ahora en el `app.js` se van a crear los controladores:
```typescript
var app = angular.module('shinobiApp',[]);

app.controller('ninjaCtrl',function(){
    this.ninja = ninjaData;

});

var ninjaData = {
    nombre: "Naruto",
    aldea: "Konoha",
    manga: "Capitulo #1",
    edad: 32,
    foto: "img/naruto.png"
}
```
El primer parametro es el nombre del controlador.
Los controladores se encargan de manejar una parte de la página o la página completa, los controladores deben estar bien encapsulados.

Ahora en el HTML en la sección donde se va a utilizar el controller, se debe asignar:
```typescript
<div class="container" ng-controller="ninjaCtrl">
```
al hacer esto, va a indicar que TODO lo que este dentro del div va a ser manejado por `ninjaCtrl`
tambien se puede utilizar un alias con (seguido del as se puede colocar cualquier cosa):
```typescript
<div class="container" ng-controller="ninjaCtrl as data">
```
Por ejemplo si se quisiera mostrar el nombre:
```typescript
<p>{{data.ninja.nombre}}</p>
```

## Segunda parte, formularios para el controlador. SCOPE.
El scope es como una variable global,esta fuera del controlador y vive en el ambito de angular,
se agrega de la siguiente forma:
```typescript
app.controller('ninjaCtrl',function($scope){

});
```
Ahora viene algo importante que cambia el funcionamiento y el código mencionado anteriormente.
Ya no queremos que `this.ninja` sea una propiedad del controlador:
```typescript
app.controller('ninjaCtrl',function(){
    this.ninja = ninjaData;

});
```
Si no que ahora sea una propiedad del scope:
```typescript
app.controller('ninjaCtrl',function($scope){
    $scope.ninja = ninjaData;
});
```
Al hacer esto hay que cambiar la forma de mostrar los datos. Antes se accedia como `data.ninja.propiedad`,recordando que se habia definido `<div class="container" ng-controller="ninjaCtrl as data">`
Ahora hay que hacer lo siguiente, solo hacer referencia a la variable del scope:
```typescript
<div class="container" ng-controller="ninjaCtrl">
....

<div class="row">
    <div class="col-3">
    <img ng-src="{{ninja.img}}" class="rounded-circle container-fluid">
    </div>
    <div class="col-9">
    <h2>{{ninja.nombre}}</h2>
    <hr>
    <p>Aldea: {{ninja.aldea}}</p>
    <br>
    <p>{{ninja.bio}}</p>
    </div>
</div>
```

Notar que ahora se accede a la variable directamente ya que es parte del $scope.

Para crear una función que pueda ser accedida por una directiva en el html, esta debe ser creada dentro del scope, por ejemplo:
```typescript
$scope.funcionEditar = function(){
  console.log("hola");  
}
```
y se llama de la forma:
```typescript
<button class="btn btn-outline-primary" ng-click="funcionEditar()">Editar</button>
```

se puede hacer lo siguiente,los input del form van a hacer referencia a un objeto vacio,y cuando se haga click en editar se va a copiar lo de ninja, a un objeto datos que esta relacionado con ngmodel a los input:
```typescript
app.controller('ninjaCtrl',function($scope){
    $scope.ninja = ninjaData;
    $scope.datos = {};
    $scope.funcionEditar = function(){
        //lo de ninja se copia a datos.
        angular.copy($scope.ninja,$scope.datos);
    }

});
```
y en el html:
```typescript
<div class="form-group">
    <label class="col-3 col-form-label">Nombre</label>
        <div class="col-9">
            <input 
            type="text" 
            class="form-control" 
            placeholder="Ingrese su nombre"
            ng-model="datos.nombre"
            >
        </div>
</div>
```