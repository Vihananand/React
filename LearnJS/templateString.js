//Template string start and end with backtick characters (`) which is not possible with " or ' 
let multiLineString = `Hello everyone!!
I am glad you are here!!`
console.log(multiLineString);

//Template strings also helps in interpolation that means inserting variables inside strings.
let language = "JavaScript";
console.log(`I am learning ${language}`);

let capitalize = "vihan";
console.log(capitalize[0].toUpperCase() + capitalize.substring(1).toLowerCase()); //This will capitalize the text