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

// A LIST
function arrayToList(arr){
    let list = {}
    if (!arr.length) return list
    else if (arr.length == 1) return {value: arr[0], rest: null};
    list.value = arr[0];
    list.rest = arrayToList(arr.slice(1));
    return list;
}

function arrayToListLoop(arr){
    let list = {value: arr[arr.length-1], rest: null};
    for (let i=1; i<arr.length; i++){
        let inner_list = {};
        inner_list.value = arr[arr.length-i-1];
        inner_list.rest = list;
        list = inner_list;
    }
    return list;
}