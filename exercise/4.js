// SUM OF A RANGE
function sum(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}

function range(start, end, step=1) {
    let arr = [], state = true;
    while (step && state){
        arr.push(start);
        start += step;
        if (step < 0) state = (start >= end);
        else state = (start <= end);
    }
    return arr;
}


// REVERSING AN ARRAY
function reverseArray(arr){
    let newArray = [];
    for (let element of arr){
        newArray.unshift(element);
    }
    return newArray;
}

function reverseArrayInPlace(arr){
    for (let i=0; i<Math.floor(arr.length/2); i++){
        let temp = arr[arr.length-i-1];
        arr[arr.length-i-1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}