function second() {
    console.log("2");
}

function myCallback(text, callback) {
    console.log(text);
    callback();
}

myCallback("Helo Callback", second);

let arr = [1, 2, 3, 4, 5];

// arr.forEach(element => {

// });

// arr.forEach(function(item, i, mass){
//  console.log(i + ': ' + item + " array: " + mass)
// });

let array = [1, 2, 3, 4, 5, 6]

for (const iterator of array) {
    console.log(iterator);
}

console.log(arr);
