
// LOOPING A TRIANGLE
for(let i=1; i<8; i+=1){
    let triangle = "";
    for(let j=0; j<i; j+=1){
        triangle = triangle + "#";
    }
    console.log(triangle);
}

let triangle = "#";
while(true){
    console.log(triangle);
    if (triangle.length == 7){
        break;
    }
    triangle += "#";
}

// FIZZBUZZ
for(let i=1; i<=100; i+=1){
    switch(i%15){
        case 3:
        case 6:
        case 9:
        case 12:
            console.log("Fizz");
            break;

        case 5:
        case 10:
            console.log("Buzz");
            break;

        case 0:
            console.log("FizzBuzz");
            break;

        default:
            console.log(i);
            break;
    }
}

for(let i=0; i<=100; i+=15){
    if (i > 0){
        console.log(i-4);
        console.log("Fizz");
        console.log(i-2);
        console.log(i-1);
        console.log("FizzBuzz");
    }
    console.log(i+1);
    console.log(i+2);
    console.log("Fizz");
    console.log(i+4);
    console.log("Buzz");
    console.log("Fizz");
    console.log(i+7);
    console.log(i+8);
    console.log("Fizz");
    console.log("Buzz");
}

// CHESSBOARD
let pattern = "";
let size = 6;
let to_start = " ";
for(let i=0; i<size; i++){
    let inner = "";
    while (inner.length < size){
        inner = inner + to_start;
        to_start = (to_start == "#")? " ": "#";
    }
    // skip if size is odd
    if (size % 2 == 0){
        to_start = (to_start == "#")? " ": "#";
    }
    pattern = pattern + inner + "\n";
}
console.log(pattern)