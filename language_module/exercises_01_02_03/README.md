# Módulo 2 Lenguajes
Ejercicios entregables
## 1. Array opera
Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
y devuelva su primer elemento. Utiliza destructuring.
```javascript
const head = (/* array */ ) => {}; // Implementation here.
```
Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada
devuelta todos menos el primer elemento. Utiliza rest operator.
```javascript
const tail = (/* array */) => {}; // Implementation here.
```
Init
Implementa una función init (inmutable), tal que, dado un array como entrada
devuelva todos los elementos menos el último. Utiliza los métodos que ofrece
Array.prototype.
```javascript
const init = (/* array */) => {}; // Implementation here.
```
Last
Implementa una función last (inmutable), tal que, dado un array como entrada
devuelva el último elemento.
```javascript
const last = (/* array */) => {}; // Implementation here.
```


## 2. Concat

Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
devuelva la concatenación de ambos. Utliza rest / spread operators.
```javascript
const concat = (a, b) => {}; // Implementation here.
```
Opcional
Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de
entrada (más de 2)


## 3. Clone Merge
Clone
Implementa una función clone que, a partir de un objeto de entrada source devuelva
un nuevo objeto con las propiedades de source :
```javascript
function clone(source) {
// Implementation here.
}
```

Merge
Implementa una función merge que, dados dos objetos de entrada source y target ,
devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
de propiedades con el mismo nombre, source sobreescribe a target .
Por ejemplo, dados estos 2 objetos:
```javascript
const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};
```
el resultado de mezclar a sobre b sería:
```javascript
merge(a, b) // {name: "Maria", age: 31, married: true, surname: "Ibañez", c
```

TIP: Puedes usar la función “clone” del apartado A.
```javascript
function merge(source, target) {
// Implementation here.
}
```
