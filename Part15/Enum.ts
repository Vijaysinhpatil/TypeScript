enum Role {

    User = "USER",
    Admin = "ADMIN"
}

type Person = {

    name : string ;
    role : Role

}

const person1 : Person = {

    name : "Vijaysinh",
    role : Role.User

}

const person2 : Person = {

    name : "Kapil",
    role : Role.Admin

}

if(person2.role === Role.Admin){
    console.log(`${person2.name} Has admin access.`);
}else{
    console.log(`${person1.name} is a normal User`);
}