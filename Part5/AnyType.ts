
let NUM : any = 5

console.log(NUM);

NUM = true

console.log(NUM);


// Unkown Type

let data : unknown

data = 10
console.log(data);

data = "Hellow"
console.log(data);

data = true
console.log(data);


if(typeof data === "boolean")
{
    console.log(data);
}