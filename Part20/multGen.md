## Mutiple Generics

- When using generics with arithmetic operations(like addition) , the result may be of a different type than the generic type.
- For example , `a + b` where `a` and `b` are of type `A extends number` will always `number` , not A.
- to avoid a type mismatch , explicitly define the return as `number`(e.g `: number`).
- This ensures typr safety and prevents type errors while maintaining the expected result.


## 📌 Syntax Breakdown of Your Generic Function

### 1️⃣ Generic Function Declaration

```
const add = <T , U> (a : T , b : U , c : boolean) => {

```
- `<T, U>` → These are generic type parameters.
- `T` represents the type of `a`.
- `U` represents the type of `b`.
- Generics allows the function to accept different data types while keeping type safety.
- `c` is normal parameter of type `boolean`.

### 2️⃣ Parameter Types

```
(a : T , b : U , c : boolean )

```
- `a` can be any type , decided when calling the function.
- `b` can also be any type , independent of `a`.
- `c` must aloways be the boolean.

### 3️⃣ Function Body

```
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

```
- `typeof` prints the runtime type of each argument.

### 4️⃣ Function Call

```

add<number , string> (5 , "vijaysinh" , false);

```

- `T = number` -> so `a` becomes a number.
- `U - number` -> so `b` becomes a string.
- `c` is passed as a boolean.


### 📌 What the Output Will Be

```

number
string
boolean

```

