function greet(a) {
    console.log(a);
}
greet("Hey all , Good Morning ");
// Write a function called isPalindrome that takes a string as a parameter and returns true if the string is palindrome else returns false.
var isPalindrome = function (num) {
    var rev = 0;
    var temp = num;
    while (num != 0) {
        var rem = Math.floor(num % 10);
        rev = rem + (rev * 10);
        num = Math.floor(num / 10);
    }
    return temp === rev;
};
var ans = isPalindrome(121);
if (ans) {
    console.log("Number is Palindrome");
}
else {
    console.log("Number is Not a Palindrome");
}
// write a function to reverse a string using reverse function
var ReverseFunction = function (str) {
    var str1 = str.split("").reverse().join("");
    console.log(str1);
};
ReverseFunction("12321");
// write a function that takes array as an arguments to calculate the Average.
var CalculateAverage = function (arr) {
    var n = arr.length;
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += i;
    }
    var avg = sum / n;
    return avg;
};
var maxValue = function (arr) {
    var n = arr.length;
    var maxi = arr[0];
    for (var i = 1; i < n; i++) {
        // @ts-ignore
        if (arr[i] > maxi) {
            maxi = arr[i];
        }
    }
    // @ts-ignore
    return maxi;
};
var arr = [12, 14, 15, 16, 18, 20];
console.log("Average would be => ".concat(Math.floor(CalculateAverage(arr))));
console.log("Maximum Value would be => ".concat(maxValue(arr)));
