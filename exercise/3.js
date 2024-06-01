
// MINIMUM
function min(first, second){
    return first > second ? second: first
}

// RECURSION
function isEven(n){
    if (n < 0) return false;
    else if (n == 0) return true;
    else if (n == 1) return false;

    return isEven(n-2)
}

// BEAN COUNTING
function countBs(word){
    return countChar(word, "B");
}

function countChar(word, char){
    let count = 0;
    for(let i=0; i<word.length; i++){
        if (word[i] == char) count++;
    }
    return count;
}
