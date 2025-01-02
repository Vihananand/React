const array = [1, 2, 3, 4, 5]; //const doesn't let array to prevent from changing the elements inside it it only prevent the vatriable to change from array type to any other type but still the number of elements inside the array can be manipulated  
array.push(6);
console.log(array);
console.log(array.length);
console.log(array.at(-1));