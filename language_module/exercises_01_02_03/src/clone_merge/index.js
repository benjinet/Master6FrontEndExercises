const cloneOperations = require('./clone.operations');
const {merge} = require('./merge.operations');

const clone = cloneOperations;

function mergeSecondVersion(a, b) {
    const cloned = clone(b, a);
 
    return cloned;

}

module.exports = {
    merge,
    mergeSecondVersion,
    clone
}