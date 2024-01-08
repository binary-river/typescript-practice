
//any
let num1: any = 10;
num1 = "abc";

let num2: number = 20;
num2 = num1;


//unknown
let unknownVar: unknown = 20;
unknownVar = "abcd";
unknownVar = true;
unknownVar = () => {};
unknownVar = 20;

let num3:number = 10;
if( typeof unknownVar === "number") 
    num3 *= unknownVar;

console.log(num3);