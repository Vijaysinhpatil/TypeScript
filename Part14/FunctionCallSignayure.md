# Function Call signature 

- It referes to the declaration or defination of a function.
- It includes function Name , parameters and return type.
- It defines the structure and type information of a function without including the function implementation ot body.
- It is used in object type notations to descripbe the shape of function within object types.


# Syntax Declaration Explanation

*** Function call signature at Type Alies ***


- define the type alies.
- within type alies we need to call function in the form of key and value pairs.
- like `functionName : (argument : typeAnnotation) => return type`

*** Function definitation at object creation by referencing Type Alies ***


- define an object by referencing the Type alies.
- In object we have write the function definitation.
- like :-  `functionName : (argument) : returnType => ${objname.key} , ${argument}`


*** Function call ***

- like : `objName.functionCallSigName(Arg)`

# Syntax:

```

type TypeName = {

    <!-- call signature -->
    SignatureName : (argment : typeAnnotation) => returnType
}

obj_Name : TypeName = {

    SignatureName : (arg) : returnType => `write All data is here`
}

obj_Name.SignatureName(arg)

```

*** If we want to call more than two function calls ***

- then use the array method.

--

- If u use the optinal method before in type alies
- then while function call it seems to be undefined but actually it is not .
- to avoid this use `non-null assertion operator`[`!`]

# !

- It is used to remove the Typescript's safety check for possible `undefined` values.