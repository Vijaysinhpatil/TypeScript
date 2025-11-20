// class Person {

//     name : string;
//     age : number;
//     city : string[];


//     constructor(name : string , age : number , city : string[]){
//         this.name = name;
//         this.age = age;
//         this.city = city
//     }
// }



// const P1 = new Person("Vijaysinh" , 15 , ["Nipani" , "Padalihal"])

// console.log(P1);



class UserDetails {

    id : number;
    name : string;
    skills : string[];

    constructor(id : number , name : string , skills : string[]){
        this.name = name;
        this.id = id;
        this.skills = skills
    }
}

const U1 = new UserDetails(1 , "Vijaysinh" , ["Python" , "ReactJs" , "NodeJs" , "ExpressJs" , "MongoDB"])
console.log(U1);
