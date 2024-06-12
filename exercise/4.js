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