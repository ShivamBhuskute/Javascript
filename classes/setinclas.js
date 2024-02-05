class ClassWithSet {
    #msg = "hello world";
    get msg() {
        return this.#msg;
    }
    set msg(x) {
        this.#msg = `hello ${x}`;
    }
}

const instance = new ClassWithSet();

console.log(instance.msg);

instance.msg = "cake";
console.log(instance.msg);