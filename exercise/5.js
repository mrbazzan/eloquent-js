
// FLATTENING

function flatten(array){
    return array.reduce((res, arr) => res.concat(arr), []);
}

console.log(flatten([[1, 2], [2, 4]]));
console.log(flatten([1, [1], [2, 4]]));


// OWN LOOP

function loop(value, test, update, body){
    do {
        body(value);
        value = update(value);
    } while(test(value))
}

loop(0, x=>x<=5, x=>x=x+1, x=>console.log(x));
