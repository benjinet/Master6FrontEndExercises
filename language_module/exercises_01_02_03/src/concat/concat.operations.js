/**
 * concat
 */
const concat = (a,b ) => [...a, ...b];

const concatMultiple = (...multiple) => [...multiple];

module.exports = {
    concat,
    concatMultiple
}