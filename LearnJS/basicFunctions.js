function sum(x, y){
    return x + y; //If I forgot to return anything here the function will return undefined
    console.log("Function sucessfully runned!!") //This will never run because there is a return statement before this statement and the program will exit from the function once it finds return statement
}

let result = sum(1 , 8);
console.log(result);