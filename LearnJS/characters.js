const language = "JavaScript";

console.log(language[0]);
console.log(language[1]);
console.log(language[2]);


console.log("The last second character of language variable is " + language[language.length - 2]); // 10 - 2 = 8

//.at() can take negative indices also which make it easier for you to start from the last character of the string that is -1.
console.log("5th position: " + language.at(5));
console.log("6th position: " + language.at(6));