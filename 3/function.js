
const square = function(x){ return x*x; }

const roundTo = function(n, step){
    let remainder = n - step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
}

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
 };

 function cube(x){
    return x*x*x;
 }

 const quad = x => x*x*x*x;
 
 // OPTIONAL ARGUMENTS

 function minus(a, b){
    if (b == undefined) return -a;
    else return a - b;
 }

 // CLOSURE

 function wrap(n){
    let local = n;
    return () => local;
 }

 function wrap2(n){
    return () => n;
 }

 // RECURSION

 let power = function(base, exponent){
    if (exponent == 0){
        return 1;
    }
    return base * power(base, exponent-1)
 }

 function findSolution(target){
    function find(current, history){
        console.log(history);
        if (current == target){
            return history;
        } else if (current > target){
            return null;
        } else {
            return find(current + 5, `(${history}+5)`) ??
                   find(current * 3, `(${history}*3)`);
        }
    }
    return find(1, "1");
 }

 // GROWING FUNCTIONS

 function zeroPad(number, width){
    digitString = String(number);
    while (digitString.length < width){
        digitString = "0" + digitString
    }
    return digitString;
}

 function printInventory(cows, chickens, goats){
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(goats, 3)} Goats`);
 }
