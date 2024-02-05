const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
        return this.log[this.log.length - 2];
    },
};

console.log(obj.latest);