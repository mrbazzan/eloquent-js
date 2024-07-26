
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