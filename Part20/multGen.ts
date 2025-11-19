// Multiple generics


const add = <T , U>(a : T , b : U , c : boolean) => {

    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));

} 

add<number , string>(5 , "Vijaysinh" , false)


const addition = <A extends number>(a: A, b: A): number => {
    return a + b;
}

const ans = addition<number>(20, 20);
console.log("Answer ->", ans);



