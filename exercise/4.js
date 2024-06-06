// SUM OF A RANGE
function range(start=0, end, step=1){
    let arr = [];
    while (start <= end){
        arr.push(start);
        start += step;
    }
    return arr;``
}

function sum(arr){
    let total = 0;
    for (let num of arr){
        total += num;
    }
    return total;
}