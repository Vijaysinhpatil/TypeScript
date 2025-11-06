// Optional Parameter

const greet = (str?: string) => {

    console.log(`Hellow ${str  || "Brother" }`);
    
}

greet("Brother")
greet()


// Default Parameter

const addition = (a : number = 10 , b : number = 20 ) => {

    let c = a + b

    console.log("Addition => " , c);
    
}

addition()
addition(50 , 50)
