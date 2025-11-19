interface Greet {

    name : string;
    age : number;

}

const UserName : Greet = {

    name : "vijaysinh",
    age : 20

}


console.log("------------ Difference between TypeAlies and interface -------");


type Greet1 = {
 
    city : string,
    state : string

}

const info : Greet1 = {

    city : "Nipani",
    state : "Karnataka"
}


console.log(UserName);
console.log(info);


//! Caluculate Total Price :

interface Total {
    name : string ;
    price : number ;
    Quantity : number

}

const Product1 : Total = {

    name : "Laptop",
    price : 1000 ,
    Quantity : 5

}

const Product2 : Total = {

    name : "PC" ,
    price : 2000,
    Quantity : 12

}

const CaluculateTotalPrice = ( total : Total ) : number => {

    // destructuring the property

    const { price , Quantity } = total

    return price * Quantity

}

console.log(`Total Price of Produce1 -> ${CaluculateTotalPrice(Product1)}`);
console.log(`Total Price of Product2 -> ${CaluculateTotalPrice(Product2)}`);
