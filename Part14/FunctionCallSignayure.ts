type Student = {

    name : string ;
    age : number;
    gender ?: string // optional method ;
    greet : (country : string) => string ;
    creativity ?: (hobby : string) => string;

}


const std1 : Student = {

    name : "Vijaysinh" ,
    age : 20,
    greet : (country) : string => `Welcome My Name is ${std1.name} , I am ${std1.age} & I am from ${country}`
}

const std2 : Student = {

    name : "Kapil" ,
    age : 20,
    greet : (country) : string => `Welcome My Name is ${std2.name} , I am ${std2.age} & I am from ${country}`,
    creativity : (hobby) : string => `I Love to Play ${hobby}`

}

const ans = (std1.greet("India"))
const ans2 = ([std2.greet("Japana") , std2.creativity!("cricket")])
console.log(ans2);



