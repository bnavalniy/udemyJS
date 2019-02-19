function second() {
    console.log("2");
}

function myCallback(text, callback) {
    console.log(text);
    callback();
}

myCallback("Helo Callback", second);