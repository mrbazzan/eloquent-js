
function speak(line){
    console.log(`The ${this.type} rabbit says ${line}`);
}

whiteRabbit = {type: "white", speak};
hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("hi!");
speak.call(hungryRabbit, "hunger!");

// Every function has a `this` binding.

// Arrow functions can access the `this` binding of the
// scope around them.
let finder = {
    value: 5,
    find(array){
        return array.some(v => v == this.value);
    }
}
console.log(finder.find([4, 5]));
console.log(finder.find([4, 6]));

// Functions defined with `function` can not access the scope
// around them
let ade = 2;
function bar(){
    let baz = 3;
    function foo(){
        // `this.baz` can not be accessed from this inner function
        console.log(this.ade, this.baz);
    }
    return foo;
}
bar()() // 2 undefined.

// PROTOTYPES
let empty = {};
console.log(empty.toString);
// It looks like a method is pulled out from an empty object BUT
// {} is linked to Object.prototype ( which stores Object.toString)
// thus making its properties accessible to the empty object.
// This concept is known as Prototyping.

// Searching for properties on an object.
// If the property is not on the object, the property will be searched for on
// the object's prototype and if it's not found, it will be searched for on the
// prototype's prototype. This continues until an object without prototype is
// reached (Object.prototype is such an object).

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf(Function.prototype) == Object.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);
console.log(Object.getPrototypeOf(Array.prototype) == Object.prototype);

protoRabbit = {speak}
blackRabbit = Object.create(protoRabbit)
blackRabbit.type = "black";
blackRabbit.speak("I am fear and darkness");

greenRabbit = Object.create(protoRabbit);
greenRabbit.type = "green";
greenRabbit.speak("I am green and happy.")

// CLASSES
// This is a syntactic sugar over JS prototype system.
// The example above can be packaged to become:

function makeRabbit(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

// With classes, it becomes:

class Rabbit {
    constructor(type){
        this.type = type;
    }
    speak(line){
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}
/********
 * This is what happens with class definition:

function R(type){
    this.type = type;
}
R.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit says ${line}`);
}
 ********/

let killerRabbit = new Rabbit("killer");
/********
 * This is what happens when Rabbit is instantiated

function instance(type){
    obj = Object.create(R.prototype);

    // .bind() returns a bounded R function.

    // R's `this` is bounded to `obj` such that
    // calling the bounded function with a type parameter makes `this.type` visible
    // throughout all the properties in `obj` that references it.

    R.bind(obj)(type);
    return obj
}
let killerRabbit = instance("killer");
 ********/

// NOTE: Only functions defined with `function` keyword
//       have `prototype` property as empty object.
let protoArrow = x => x > 2;
function proto(x) { return x > 2};

console.log(protoArrow.prototype == undefined);
console.log(proto.prototype);  // equals to {}.

// It is also possible to have properties that are stored
// directly on the instace object. These properties are unlike
// methods which are stored on the prototype

class Particle {
    speed = 0;  // stored on each instance's object.
    constructor(position){
        this.position = position;
    }
}

// classes can be defined in an expression
let obj = new class { getword() {return "hello"; }};
console.log(obj.getword()); // "hello"
