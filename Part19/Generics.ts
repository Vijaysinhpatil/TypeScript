// simple a function

// const logAndReaturn = (value : number | string | boolean ) : number | string | boolean => {

//     return value

// }

// const numberResult = logAndReaturn(40)
// const stringResult = logAndReaturn("Vijaysinh")
// const booleanResult = logAndReaturn(true)

// console.log(numberResult);
// console.log(stringResult);
// console.log(booleanResult);


// Generic function

const logAndReaturn = <T>(value : T) : T => {
    return value
}

const numberResult = logAndReaturn<number>(40)
const stringResult = logAndReaturn<string>("Vijaysinh")
const booleanResult = logAndReaturn<boolean>(true)

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
