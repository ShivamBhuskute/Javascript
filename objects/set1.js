const obj = {
    set current(name) {
        this.log.push(name);
    },
    log: [],
};

obj.current = "en";
obj.current = "fa";

console.log(obj.log);