/*
Substring is basicaaly a part of string. So "ava" in "JavaScript" is a substring.
*/

const n = "JavaScript";
console.log(n.substring(1,4)); //substring(starting index, ending index + 1(because it excludes the ending index so as here I have used 4 it will go upto 3 and not 4))
console.log(n.substring(4)); //substring(starting index), so if there is only one parameter inside substring() function it will consider it as starting index