// Basic Tuple

const getUser = () : [string , number] => {
      
    return ["Vijaysinh" , 22]

}

const user  = getUser()
console.log("User => " , user);


// Optional Tuple 

type Point = [number , number , number?]

const createPoint = (x : number , y : number , z ?: number) : Point => {

    return z != undefined ? [x,y,z] : [x,y]

}

const p1 = createPoint(10 , 20)
const p2 = createPoint(10 , 20 , 30)

console.log("P1 : " , p1);
console.log("P2 : " , p2);

// Rest Tuple (Function Return Example)

type Log = [number , ...string[]]

const createLog = (timestamp : number , ...details : string[]) : Log => {

    return [timestamp , ...details]

}

const log1 = createLog(123454678 , "Server Started")
const log2 = createLog(1265465 , "Error" , "DB Down" , "Restated")

console.log("Log1 :" , log1);
console.log("Log2 " , log2);



type  Addition = readonly [number , number , number]

const add = (nums : Addition) : Addition => {
    
    return nums

}

const answer = add([10 , 20 , 30])

// answer.push(40)

console.log(answer);




