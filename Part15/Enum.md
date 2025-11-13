# Enum

- It is used when we want to pick up sutaible opetion amoung the several type of options.

*** Definition ***

- Enums are used to define a set of named constant values that represent spcific optionds or states.

*** Readability ***

- They make the code easier to read and maintain instead of using plain numbers or strings.

*** Type ***

- Ts supports numeric and string enums.

*** Usage ***

- Enum help avoid error by restricting values to a fixed list of allowd name.


# Syntax

```

enum Enum_Name {

    key = value,
}

<!-- define type alies -->

type TypeName = { 

    key : typeannotation;

}

<!-- Object creation -->

const ObjName : TypeName = {

    key : value,

}

```