
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