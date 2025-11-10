"use strict";
// Optional Parameter
Object.defineProperty(exports, "__esModule", { value: true });
const greet = (str) => {
    console.log(`Hellow ${str || "Brother"}`);
};
greet("Brother");
greet();
// Default Parameter
const addition = (a = 10, b = 20) => {
    let c = a + b;
    console.log("Addition => ", c);
};
addition();
addition(50, 50);
//# sourceMappingURL=Optional.js.map