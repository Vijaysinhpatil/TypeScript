## Touple

- It is fixed length where each element has a specific type.
- This makes tuples useful for situations where the order and types of the elements matters.

### Why Use Tuple

#### Fixed order and Types : 

- Useful when u know exactly how many elements you need and their types.

#### Better then  array : 

- When the number and type of items are fixed but don't want the overhead of an object.

### Labeling Tuple Elements : 

- we can add labels to make our tuple more redable

```
type response = [status : number , message : string ];

const res : Apiresponse = [200 , "Ok]

```

### Optional & Rest Elemets : 

- We can pass the type as an optional using `?` or add extra elements using `...`(rest):

```
type Point = [ number , number , number? ] ;
const p : Point = [10 , 20 ]

```

### readOnly Tuples

- Used To prevent changes to a tuple , use `readonly`:

```

const user : readonly [ string , number ] = ["Vijaysinh" , 22]
user.push(30) //Error

```

### When to Use Tuples :

- When order and types matters (e.g. a pair of values)
- use them for function return values where you know the exact structure.

### Best Practices :

- Use tuple for fixed-size , ordered data.
- Avoid using tuples when the data structure is complex or variable.
- use `readonly` to prevent acciental changes.
