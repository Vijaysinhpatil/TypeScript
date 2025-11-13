var std1 = {
    name: "Vijaysinh",
    age: 20,
    greet: function (country) { return "Welcome My Name is ".concat(std1.name, " , I am ").concat(std1.age, " & I am from ").concat(country); }
};
var std2 = {
    name: "Kapil",
    age: 20,
    greet: function (country) { return "Welcome My Name is ".concat(std2.name, " , I am ").concat(std2.age, " & I am from ").concat(country); },
    creativity: function (hobby) { return "I Love to Play ".concat(hobby); }
};
var ans = (std1.greet("India"));
var ans2 = ([std2.greet("Japana"), std2.creativity("cricket")]);
console.log(ans2);
