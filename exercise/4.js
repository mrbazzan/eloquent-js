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

function listToArray(list){
    let arr = [];
    if (list === null || list.rest === undefined) return arr;
    else{
        arr = listToArray(list.rest);
        arr.unshift(list.value);
    }
    return arr;
}

function listToArrayLoop(list){
    let arr = [];
    while (list !== null && list.rest !== undefined){
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

function prepend(element, list){
    return {value: element, rest: list};
}

function nth(list, number){
    let count = 0
    while (list !== null && list.rest !== undefined){
        if (count == number) return list.value;
        list = list.rest;
        count += 1
    }
    return undefined;
}

function recursive_nth(list, number){
    if (number == 0) return list.value;
    else if (list === null || list.rest === undefined) return
    return recursive_nth(list.rest, number - 1);

}

// DEEP COMPARISON
function deepEqual(one, two){
    // same value
    // object with the same properties, where values of the properties
    // are equal when compared recursively

    let equal = false;

    if (typeof one == "object" && typeof two == "object"){
        if (one == null && two == null) return !equal;

        props_one = Object.keys(one);
        props_two = Object.keys(two);
        if (props_one.length === props_two.length){
            equal = true; // this is for empty objects
            for (let item of props_one){
                if (props_two.includes(item)){
                    equal = deepEqual(one[item], two[item]);
                    /* terminate (indian-mike-mike) if false */
                    if (!equal) return equal;
                }
                else equal = false;
            }
        } else equal = false
    } else equal = (one === two);

    return equal;
}