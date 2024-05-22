
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