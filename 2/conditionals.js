// IF statement
let num = Number(prompt("Pick a number: "));
if (!Number.isNaN(num)){
    console.log("Square of the number is : " + num*num);
}
// adding an ELSE block
else {
    console.log(num + " is not a number");
}

let number = Number(prompt("Pick a number: "));
if (number < 5){
    print("The number is less that five");
}
// multiple pathways
else if (number < 10){
    print("The number is less than 10");
}
else {
    console.log("The number is greater than 10");
}