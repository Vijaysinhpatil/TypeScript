var std1 = {
    name: "Vijaysinh",
    age: 20,
    isStudent: true,
    class: "5th sem BCA",
    address: {
        city: "Nipani",
        state: "Karnataka"
    }
};
console.log("Student Object => ", std1);
var std2 = {
    name: "Prathamesh",
    age: 22,
    isStudent: true,
    class: "6th sem BCA",
    address: {
        city: "Nipani",
        state: "Karnataka"
    }
};
console.log("Student2 Object => ", std2);
var P1 = {
    name: "Vectus",
    price: 100000,
    quantity: 5
};
var CalculateTotalPriice = function (P1) {
    var ans = P1.price * P1.quantity;
    return ans;
};
var ans = CalculateTotalPriice(P1);
console.log("Total Cost of Laptops => ", ans);
