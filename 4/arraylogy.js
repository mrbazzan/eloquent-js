
// REST PARAMETERS
function max(...arr){
    let highest = -Infinity;
    for (let number of arr){
        if (number > highest) highest = number;
    }
    return highest;
}

let coordinates = {x: 10, y: 0};
console.log({...coordinates, y: 5, z: 1});

// DESTRUCTURING
let [n00, n01, n10, n11] = [76, 9, 4, 1];
console.log(n01);

let {name} = {name: "Gambo", rank: "Captain"};
console.log(name);

// OPTIONAL PROPERTY ACCESS
let a = {name: "Jude", status: true};
console.log(a?.name);
console.log(a.name.upper?.())

// JSON
let entry = JSON.stringify({events: ["weekend"], squirrel: false});
console.log(entry);
console.log(JSON.parse(entry).events);
