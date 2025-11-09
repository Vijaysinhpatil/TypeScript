var arr = [1, 2, 3, 4, 5];
// doubling an array elemets using map function
var arr2 = arr.map(function (item) { return item * 2; });
console.log(arr2);
// converting an array Elements to string
var str = arr.map(function (item) { return item.toString(); });
console.log(str);
// filter method
var arr3 = arr.filter(function (item) { return item > 2; });
console.log(arr3);
var arr4 = arr.filter(function (item) { return item % 2 === 0; });
console.log(arr4);
var str1 = ["vijaysinh", "Dattajirao", "Patil", "Luffy"];
var strarr = str1.filter(function (item) { return item === "vijaysinh"; });
var strarr3 = str1.map(function (item) { return item.toUpperCase(); });
console.log(strarr3);
