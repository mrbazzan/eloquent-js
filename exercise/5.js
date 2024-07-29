
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

// EVERYTHING

function everyUsingLoop(arr, predicate){
    for (let element of arr){
        if (!predicate(element)) return false;
    }
    return true;
}
console.log(everyUsingLoop([1,2,3], x=>x>1));

function everyUsingSome(arr, predicate){
    // `some` returns false unless callBackFn returns
    // truthy value, in which case, the true is immediately
    // returned.
    return !arr.some((num) => !predicate(num));
}
console.log(everyUsingSome([1,2,3], x=>x>1));

// DOMINANT WRITING DIRECTION
// The dominant direction is the direction of a
// majority of the characters that have a script
// associated with them.
function dominantWritingDirection(text){
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script? script.direction: "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found."

    // Find the most dominant based on count.
    return scripts.reduce((a, b) => a.count > b.count? a: b).name;
}