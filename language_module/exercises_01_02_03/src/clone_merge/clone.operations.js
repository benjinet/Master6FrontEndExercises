
function clone (...source) {
    return Object.assign({},...source);
}

module.exports = clone;