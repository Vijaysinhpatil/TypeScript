var strArray = ["Luffy", "Zoro", "Sanji", "Robin", "Nami", "Chopper", "Ussap", "Jimbei"];
// Add an array elements using push method
var arr2 = strArray.push("Frankey", "Brook", "Trafagar");
// console.log(strArray);
// Delete or Remove an array elements using pop() method
strArray.pop();
strArray.shift();
// console.log("After poping" , strArray , arr2);
// Iterating over an array using for loop
for (var i = 0; i < strArray.length; i++) {
    // console.log(strArray[i]);
}
// Iterating over an array using for...in
for (var str in strArray) {
    // console.log(str); // access the indices 
}
// Iterating over an array using for...of
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var str = strArray_1[_i];
    // console.log(str); // access the index values
}
strArray.forEach(function (str, index) { return console.log("Array at Index ".concat(index), str); });
