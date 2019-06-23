/** 
 * Head
*/
const head = (arrayParam) => {
    console.info('Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento.');
    const [a,,] = arrayParam;
    return a;
};

/** 
 Tail
*/
const tail = (arrayParam) => {
    console.info('Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento.');
    const [,...a] = arrayParam;
    return a;
}; 

/**
 * Init
 */
const init = (arrayParam) => {
    console.info('Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último.');
    const arrayResult = arrayParam.slice(); // create copy
    arrayResult.pop(); // remove the last element from the array copy
    return arrayResult;
};

/**
 * Last
 */
const last = (arrayParam) => {
    console.info('Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.');
    const [a,,] = arrayParam.reverse();
    return a;
}


module.exports = {
    head,
    tail,
    init,
    last
}