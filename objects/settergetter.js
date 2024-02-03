const obj = { counter: 0 };

Object.defineProperty(obj, "reset", {
    get: function () { this.counter = 0 }
});

Object.defineProperty(obj, "add", {
    get: function () { this.counter += value }
});

Object.defineProperty(obj, "subtract", {
    get : function (){this.counter -= value}
});

Object.defineProperty(obj, "increment", {
    get : function(){this.counter++;}
});

Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
});

obj.reset;
obj.add = 5;    


