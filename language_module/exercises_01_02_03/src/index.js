const {
    head,
    tail,
    init,
    last
} = require('./arrays');

const {
    concat,
    concatMultiple
} = require('./concat');

const {
    merge,
    mergeSecondVersion,
    clone,
} = require('./clone_merge');

const array = [1,2,3,4,5,7,8];
console.info(`1. Ejercicios Arrays \n`);
console.info(`Array[${array}]\n`);
console.info(`head: ${head(array)} \n`);
console.info(`tail: ${tail(array)} \n`);
console.info(`intit: ${init(array)} \n`);
console.info(`last: ${last(array)} \n`);

const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [7,8,9];
console.info(`2. Ejercicios Concat \n`);
console.info(`Array1 [${array1}]\n`);
console.info(`Array2 [${array2}]\n`);
console.info(`Array3 [${array3}]\n`);
console.info('Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos.');
console.info(`concat: ${concat(array1, array2)} \n`);
console.info('Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada.');
console.info(`concat: ${concatMultiple(array1, array2, array3)} \n`);


const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};
console.info(`3. Ejercicios Clone Merge \n`);
console.info(`a:${JSON.stringify(a)}\n`);
const clonedA = clone(a);
console.info(`clone a  ${JSON.stringify(a)} into clonedA  ${JSON.stringify(clonedA)} \n`);
console.info(`a:${JSON.stringify(a)}\n`);
console.info(`b:${JSON.stringify(b)}\n`);
const  mergedAB = merge(a, b);
console.info(`merge a ${JSON.stringify(a)} with b ${JSON.stringify(b)}: ${JSON.stringify(mergedAB)} \n`);

console.info(`a:${JSON.stringify(a)}\n`);
console.info(`b:${JSON.stringify(b)}\n`);
const  merged2AB = mergeSecondVersion(a, b);
console.info(`merge second version, a ${JSON.stringify(a)} with b ${JSON.stringify(b)}: ${JSON.stringify(merged2AB)} \n`);


