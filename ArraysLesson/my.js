'use strict';

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');

// let arr = ["asdasd", "sda", "ttt"],
//     i = arr.join(',');

//     console.log(i);

//sort works with strings by def -> for storing numbers need provide 
let arr = [1, 12, 6],
    i = arr.sort(compare);

    function compare(a, b){
        return a-b;
    }
    console.log(i);