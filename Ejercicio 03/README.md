# Ejercicio 03
un app.js normal:
```typescript
var app = angular.module('shinobiApp',[]);

app.controller('listadoCtrl',['$scope',function($scope){
    $scope.arreglo = ["Eduardo","Pedro","Diego"];
}]);
```

## ng-repeat
El ng-repeat es lo mismo que ng-for de angular 6:
```typescript
<ul>
    <li ng-repeat="dato in arreglo">{{dato}}</li>
</ul>
```
tambien podria ser de la forma `ng-repeat="(key,value) in arreglo"`

## Filtrado de datos.
para filtrar los datos hay que agregar en el ng-repeat un `filter`:
```typescript
<tr ng-repeat="data in personas | filter:buscar">
    <td><img ng-src="./img/{{data.avatar}}" alt="" width="50px" height="50px"></td>
    <td>{{data.nombre}}</td>
    <td>{{data.sexo}}</td>
    <td>{{data.telefono}}</td>
    <td>{{data.celular}}</td>
</tr>
```
El filter tiene que estar asociado a un input de ng-model como por ejemplo `ng-model="buscar"` o tambien podria ser un objeto como se utilizo en este caso.
```typescript
<div class="form-group row">
    <label class="col-1 col-form-label">Buscar:</label>
    <div class="col-8">
    <input type="text" placeholder="Ingresar texto" class="form-control" ng-model="buscar.nombre">
    </div>
</div>
<div class="form-group row">
    <label class="col-1 col-form-label">Genero:</label>
    <div class="col-8">
        <select ng-model="buscar.sexo" class="form-control">
        <option value="">Todos</option>
        <option value="hombre">Hombre</option>
        <option value="mujer">Mujer</option>
        </select>
    </div>
    </div>
```