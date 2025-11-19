var UserName = {
    name: "vijaysinh",
    age: 20
};
console.log("------------ Difference between TypeAlies and interface -------");
var info = {
    city: "Nipani",
    state: "Karnataka"
};
console.log(UserName);
console.log(info);
var Product1 = {
    name: "Laptop",
    price: 1000,
    Quantity: 5
};
var Product2 = {
    name: "PC",
    price: 2000,
    Quantity: 12
};
var CaluculateTotalPrice = function (total) {
    // destructuring the property
    var price = total.price, Quantity = total.Quantity;
    return price * Quantity;
};
console.log("Total Price of Produce1 -> ".concat(CaluculateTotalPrice(Product1)));
console.log("Total Price of Product2 -> ".concat(CaluculateTotalPrice(Product2)));
