# Ejercicio 01

## Indicar al html que se va a usar angular.
Para decir que la página HTML va a ser controlada por AngularJS hay que colocar la siguiente directiva:
```typescript
<html lang="en" ng-app>
```
luego para mostrar texto en angularJs usar:
```typescript
<h1>{{"Hola mundo desde angularJs"}}</h1>
```
## Filtros (son los pipes de angular)
Los filtros se encuentran en:
[Filtros AngularJS](https://docs.angularjs.org/api/ng/filter)

## ngModel
Aunque la variable `nombre` no este creada, angularjs con el ng-model puede manejar el comportamiento de la variable.
```typescript
<div class="form-group row">
    <label class="col-2 col-form-label">Su nombre: {{nombre}}</label>
        <div class="col-8">
            <input 
            type="text" 
            class="form-control" 
            placeholder="Ingrese su nombre"
            ng-model="nombre"
            >
        </div>
</div>
```