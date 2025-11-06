let age = 20 // ts compiler infer the type of age is number
let str = 'Vijaysinh' // ts compiler infer the type of str is string

console.log(typeof age );
console.log(typeof str);


// HW => 

// 1. declare a variable message and initiliaze it with the value "Hellow , typescript"

let str1 = "Hellow.. TypeScript..!"

console.log(typeof str1); //ts compiler infer the type of str is string

// 2. write a function to calculateArea of Rectangle that takes length and width as an arguments

const CalculateAreaOfRectangle = (length = 12, width = 45) => {

    let area = length * width

    return area

}

const ans = CalculateAreaOfRectangle(12 , 45)

console.log(ans);

