# 🧠 TypeScript Core Concepts: Boolean & BigInt

* # 🔹Boolean 

- Boolean is a data type that represents only two possible values: true or false.

- It’s commonly used in conditional checks, comparisons, and logical operations.

*** 💡 When to Use: ***

- When a function takes a number or any input and needs to return a true/false result — the return type should be boolean.


*** 🔹 BigInt ***

- BigInt is a special numeric type in JavaScript and TypeScript used to handle very large integers that exceed the safe range of the number type.

- JavaScript numbers are only accurate up to 2^53 - 1 (≈ 9,007,199,254,740,991). Beyond that, precision errors occur.

*** 💡 Why Use BigInt? ***

- When you’re working with huge integers (like database IDs, cryptographic keys, or financial data) where precision matters.


# HW

- Write a ts function called isDivisibleBy4&8 which takes number as a parameter and check wheather that number is divisible by 4&8 Both numbers and return true else false