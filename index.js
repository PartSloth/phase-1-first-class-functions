function receivesAFunction(callback) {
    callback();
}

function namedFunction() {
    console.log("This is a named function");
}

function returnsANamedFunction() {
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function.");
    }
}