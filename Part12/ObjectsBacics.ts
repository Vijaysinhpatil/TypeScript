const userInfo : {

    id : number,
    name : string ,
    address : {
        city : string,
        country : string
    },
    passion : string
} = {
    id : 1 ,
    name : "Vijaysinh",
    address : {
        city : "Nipani",
        country : "india"
    },
    passion : "Coding"
}

console.log(userInfo);
console.log(userInfo?.address?.city);

