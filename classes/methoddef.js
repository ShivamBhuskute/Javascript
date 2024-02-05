class BaseClass {
    msg = "hello world";
    basePublicmethod() {
        return this.msg;
    }
}

class Subclass extends BaseClass {
    subPublicMethod() {
        return super.basePublicmethod();
    }
}

const instance = new Subclass();
console.log(instance.subPublicMethod());