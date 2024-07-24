
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
        name: "ASCII",
        ranges: [[32, 255]],
        direction: "ltr",
        year: 0,
        living: true,
        link: "https://en.wikipedia.org/wiki/ascii"
    },
    {
        name: "Coptic",
        ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
        direction: "ltr",
        year: -200,
        living: false,
        link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
    },
    {
        name: "example",
        ranges: [[110, 200]],
        direction: "ltr",
        year: 50,
        living: false,
        link: "https://example.com"
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

// COMPOSABILITY
// average year of origin for living and dead scripts

function average(array){
    return array.reduce((a, b) => a + b) / array.length;
}
let avg_living_year = average(
    SCRIPTS.filter(s => s.living).map(script => script.year)
)
let avg_dead_year = average(
    SCRIPTS.filter(s => !s.living).map(script => script.year)
)

// STRINGS AND CHARACTER CODES

function characterScript(code){
    for (let script of SCRIPTS){
        // `some` method
        // takes a test function and figure out wheter
        // that function returns true for any element of the array.
        if (script.ranges.some(([a, b]) => {
            return (a <= code) && ( code <= b)
        })){ return script}
    }
    return null;
}

let horseShoe = "🐴👟";
console.log(horseShoe.charCodeAt(0)) // get each code unit
console.log(horseShoe.codePointAt(0))// to get character

let length = 0
for (let _ of horseShoe){
    length = length + 1;
}
console.log("Length of horseShoe: ", length);

function countBy(items, groupName){
    let counts = [];
    for (let item of items){
        let name = groupName(item);
        let known = counts.find(item=>item.name==name);
        if (!known){
            counts.push({name, count: 1})
        } else {
            known.count += 1;
        }
    }
    return counts;
}
console.log(countBy([1,2,3,4,5], n=>n>2));  // [{false, 2}, {true, 3}]

function textScripts(text){
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script? script.name: "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found.";

    return scripts.map(({name, count}) => {
        return `${Math.round(count*100/total)}% ${name}`;
    }).join(", ");
}
