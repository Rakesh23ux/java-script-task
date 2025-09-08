var appName = "Simple Calculator";

showAppName();

function calculator(num1, num2, operationCallback) {

    var a = num1;
    var b = num2;
    return operationCallback(a, b);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function showAppName() {
    console.log("Welcome to " + appName);
}

console.log("5 + 3 =", calculator(5, 3, add));
console.log("10 - 7 =", calculator(10, 7, subtract));   