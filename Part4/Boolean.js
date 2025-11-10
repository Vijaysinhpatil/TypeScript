"use strict";
// Write a function called isEven when return true value if it is even else false
Object.defineProperty(exports, "__esModule", { value: true });
const isEvent = (num) => {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
let num = 152;
let a = isEvent(num);
console.log("Number is Even => ", a);
// HW => Write a ts function called isDivisibleBy4&8 which takes number as a parameter and check wheather that number is divisible by 4&8 Both numbers and return true else false
const isDivisibleBy4And8 = (NUM) => {
    if ((NUM % 4 && NUM % 8) === 0) {
        return true;
    }
    else {
        return false;
    }
};
let NUM = 32;
console.log(`${NUM} is Divisible By 4 & 8 is ${isDivisibleBy4And8(NUM)}`);
// BigInt Type
// let maxNum = Number.MAX_SAFE_INTEGER;
// let maxNum : bigint  = 9007199254740992n
// console.log(maxNum);
// using BigInt Constructor
// let maxNum = BigInt("9007199254740992")
// console.log(maxNum);
// let maxNum2 = BigInt("9007199254740992")
// console.log(maxNum2);
// let sum : bigint = maxNum2 + maxNum
// console.log("Addition => " , sum);
// let sum1 : bigint = maxNum2 * maxNum
// console.log("Multiplection =>" , sum1);
// let sum2 : bigint = maxNum2 / maxNum
// console.log("Division => " , sum2);
//# sourceMappingURL=Boolean.js.map