// Basic Tuple
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var getUser = function () {
    return ["Vijaysinh", 22];
};
var user = getUser();
console.log("User => ", user);
var createPoint = function (x, y, z) {
    return z != undefined ? [x, y, z] : [x, y];
};
var p1 = createPoint(10, 20);
var p2 = createPoint(10, 20, 30);
console.log("P1 : ", p1);
console.log("P2 : ", p2);
var createLog = function (timestamp) {
    var details = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        details[_i - 1] = arguments[_i];
    }
    return __spreadArray([timestamp], details, true);
};
var log1 = createLog(123454678, "Server Started");
var log2 = createLog(1265465, "Error", "DB Down", "Restated");
console.log("Log1 :", log1);
console.log("Log2 ", log2);
var add = function (nums) {
    return nums;
};
var answer = add([10, 20, 30]);
// answer.push(40)
console.log(answer);
