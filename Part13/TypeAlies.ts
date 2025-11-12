type Student = {

    name : string;
    age : number ;
    isStudent : true ;
    class?: string ; //optional
    address : {
        city : string ;
        state : string ;
    }
}

const std1 : Student = {

    name : "Vijaysinh" ,
    age : 20 ,
    isStudent  : true ,
    class : "5th sem BCA",
    address : {
        city : "Nipani",
        state : "Karnataka"
    }
}

console.log("Student Object => " , std1);

const std2 : Student = {

    name : "Prathamesh" ,
    age : 22 ,
    isStudent  : true ,
    class : "6th sem BCA",
    address : {
        city : "Nipani",
        state : "Karnataka"
    }

}

console.log("Student2 Object => " , std2);



//HW 

// write a function that take object as an argument and return total price.

type Product = {

    name : string ;
    price : number ;
    quantity : number

}

const P1 : Product = {

    name : "Vectus",
    price : 100000,
    quantity : 5
}


const CalculateTotalPriice = (P1 : Product) : number => {

    let ans = P1.price * P1.quantity;
    return ans
}



let ans = CalculateTotalPriice(P1)

console.log("Total Cost of Laptops => " , ans);
