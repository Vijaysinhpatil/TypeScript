// Type Annotation =>

// number type Annotations

// let num1 : number = 40
// let num2 : number = 28.6
// let num3 : number = -5
// let num4 : number = Math.sqrt(16)
// let num5 : number = NaN

// console.log(num1 , num2 , num3 , num4 , num5);

// String Task =>

let str1 : string = "Hellow World"
let str2 : string = "Hellow Vijaysinh"

console.log("String Concatenation" , str1 + " " + str2);

// strig length
console.log("Length of str1 => " , str1.length);

// string Uppercase and lowerCase
console.log("UpperCase =>" , str2.toUpperCase());
console.log("LowerCase =>" , str2.toLowerCase());

// String into substring

let str3 : string = str2.slice(1,5)
console.log("SubString =>" , str3);

// string Comarision

let str4 = str1.localeCompare(str2)
console.log("String Comparision =>" , str4);

if(str1 === str2)
{
    console.log("1");
}
else
{
    console.log("0");
    
}

// Templete literlas

console.log(`String1 => ${str1}`);
