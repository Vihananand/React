let million = 1_000_000; //This is 1000000 but _ makes it easier to read that this is a million
console.log(million);

let num = 6969;
console.log(typeof(num.toString())); //toString() converts a number to string.

console.log("abc" * 55); //This will print NaN(Not a Number). NaN is also considered as a bug.
console.log(isNaN("lol")); // Checks wether what written inside isNan() function is a number or not if not a number returns true otherwise false

let n = "42";
console.log(Number.parseInt(n, 10)); //Number.parseInt(string, radix) radix is the base of the number you want to convert into like 10 is for decimal number, 16 is for hexadecimal but it is not convert a number into binary.
console.log(Number.parseInt(num, 16));

//This is the way to convert a number to binary
let n2 = 568;
let binary = n2.toString(2);
console.log(binary);