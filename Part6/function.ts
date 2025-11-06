
function greet(a : string){

    console.log(a);
    
}

greet("Hey all , Good Morning ")

// Write a function called isPalindrome that takes a string as a parameter and returns true if the string is palindrome else returns false.

const isPalindrome = (num : number ) : boolean => {

    let rev = 0;
    let temp = num

    while(num != 0)
    {
        let rem = Math.floor(num % 10)
        rev = rem + (rev * 10)
        num = Math.floor(num / 10)
    }

    return temp === rev
    
}

const ans = isPalindrome(121)

if(ans)
{
    console.log("Number is Palindrome");
}else{
    console.log("Number is Not a Palindrome");
    
}


// write a function to reverse a string using reverse function

const ReverseFunction = (str : string) => {

    let str1 = str.split("").reverse().join("")

    console.log(str1);
    
}

ReverseFunction("12321")


// write a function that takes array as an arguments to calculate the Average.

const CalculateAverage = (arr : number[]) : number => {

    let n = arr.length 

    let sum = 0
    for(let i = 0; i < n;i++)
    {
          sum += i
    }

    let avg = sum / n

    return avg
}



const maxValue = (arr : number[]) : number => {

    let n = arr.length
    let maxi = arr[0]

    for(let i = 1;i < n;i++)
    {
        // @ts-ignore
        if(arr[i] > maxi){
             maxi = arr[i]
        }
    }
    // @ts-ignore
    return maxi
}

let arr = [ 12 , 14 , 15 , 16 , 18 , 20 ]
console.log(`Average would be => ${Math.floor(CalculateAverage(arr))}`);
console.log(`Maximum Value would be => ${maxValue(arr)}`);

