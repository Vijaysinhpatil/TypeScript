## Interface

- In typescript , an interface is a powerful feature that allows you to define a contract for an object's shape.

### Contract means-

- Any object using interface must follow the same structure.
- It must include all the required properties defined by the interface.
- Each property must be of the correct type.
- TypeScript will give an error of the object breaks this `agreement`.

## Difference Between type alies and interface

### ✅ 1. Purpose

#### Interface
- describe the shape of an object.
- Used mainly for object structures , classes and API's

#### Type Alies
- Can describe anything : objects , primitives , unions , tuples , functions...
- More flexible.
- type alias can not be redeclred.


### ✅ 2. Syntax

#### Interface

```
interface Person {
    name : string ;
    sge : number ;
}

```
#### Type Alias

```
type Person = {

    name : string ;
    age : number ;

}

```

### ✅ 3. Where to use

#### Interface → Use when

- You are designing object shapes.
- You expect the structure to be extended or merged.
- You are working with classes (implements).

#### Type Alias → Use when

- You need unions, intersections, tuples, primitives, or complex types
- More general flexibility