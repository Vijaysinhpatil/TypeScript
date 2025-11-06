// Optional Parameter
var greet = function (str) {
    console.log("Hellow ".concat(str || "Brother"));
};
greet("Brother");
greet();
// Default Parameter
var addition = function (a, b) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 20; }
    var c = a + b;
    console.log("Addition => ", c);
};
addition();
addition(50, 50);
