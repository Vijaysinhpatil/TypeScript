
let strArray : string[] = ["Luffy" , "Zoro" , "Sanji" , "Robin" , "Nami" , "Chopper" , "Ussap" , "Jimbei"]


// Add an array elements using push method
let arr2 = strArray.push("Frankey" , "Brook" , "Trafagar")

// console.log(strArray);

// Delete or Remove an array elements using pop() method

strArray.pop()

strArray.shift()

// console.log("After poping" , strArray , arr2);

// Iterating over an array using for loop

for(let i=0;i<strArray.length;i++)
{
    // console.log(strArray[i]);
    
}

// Iterating over an array using for...in

for(let str  in strArray){

   // console.log(str); // access the indices 
    
}

// Iterating over an array using for...of

for(let str of strArray){
    // console.log(str); // access the index values
    
}

strArray.forEach((str : string , index : number) => console.log(`Array at Index ${index}` , str));
