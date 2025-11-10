"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr = [1, 2, 3, 4, 5];
// doubling an array elemets using map function
const arr2 = arr.map((item) => item * 2);
console.log(arr2);
// converting an array Elements to string
const str = arr.map((item) => item.toString());
console.log(str);
// filter method
const arr3 = arr.filter((item) => item > 2);
console.log(arr3);
const arr4 = arr.filter((item) => item % 2 === 0);
console.log(arr4);
const str1 = ["vijaysinh", "Dattajirao", "Patil", "Luffy"];
const strarr = str1.filter((item) => item === "vijaysinh");
const strarr3 = str1.map((item) => item.toUpperCase());
console.log(strarr3);
//# sourceMappingURL=ArrayMapFilterFn.js.map