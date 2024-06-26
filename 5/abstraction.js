
function repeat(n, action){
    for (let i = 0; i<n; i++){
        action(i)
    }
}

let labels = [];
repeat(5, i => labels.push(i));

function unless(test, then){
    if (!test) then();
}

// repeat unless n is not even
repeat(3, n => {
    unless(n%2 == 1, () => {
        console.log(n, "is even");
    })
})

// SCRIPT DATA SET
SCRIPTS = [
    {
        name: "Coptic",
        ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
        direction: "ltr",
        year: -200,
        living: false,
        link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
    },
];

function filter(array, test){
    let passed = [];
    for (let element of array){
        if (test(element)){
            passed.push(element);
        }
    }
    return passed;
}
console.log(filter(SCRIPTS, script => script.living));
// OR
console.log(SCRIPTS.filter(script=>script.living));

function map(array, transform){
    let mapped = [];
    for (let element of array){
        mapped.push(transform(element));
    }
    return mapped;
}
console.log(map(SCRIPTS, item=>item.name))
// OR
console.log(SCRIPTS.map(item=>item.name));

function reduce(array, combine, start){
    let current = start;
    for (let element of array){
        current = combine(current, element);
    }
    return current;
}
console.log(reduce([3, 4, 5, 6], (a, b) => a+b, 2))

// character count
function characterCount(script){
    return script.ranges.reduce((count, [from , to]) => {
        return count+(to-from);
    }, 0)
}
console.log(reduce(
    SCRIPTS,
    (a, b) => characterCount(a) > characterCount(b)? a: b,
    SCRIPTS[0]
));

console.log(SCRIPTS.reduce(
    (a, b) => characterCount(a) > characterCount(b)? a: b)
);

