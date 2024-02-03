function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min /* +1 to inlclude max too*/)) + min;
}

console.log(getRndInt(1, 10));