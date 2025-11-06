var age = 20; // ts compiler infer the type of age is number
var str = 'Vijaysinh'; // ts compiler infer the type of str is string
console.log(typeof age);
console.log(typeof str);
// HW => 
// 1. declare a variable message and initiliaze it with the value "Hellow , typescript"
var str1 = "Hellow.. TypeScript..!";
console.log(typeof str1); //ts compiler infer the type of str is string
// 2. write a function to calculateArea of Rectangle that takes length and width as an arguments
var CalculateAreaOfRectangle = function (length, width) {
    if (length === void 0) { length = 12; }
    if (width === void 0) { width = 45; }
    var area = length * width;
    return area;
};
var ans = CalculateAreaOfRectangle(12, 45);
console.log(ans);
