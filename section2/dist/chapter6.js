//any
let num1 = 10;
num1 = "abc";
let num2 = 20;
num2 = num1;
//unknown
let unknownVar = 20;
unknownVar = "abcd";
unknownVar = true;
unknownVar = () => { };
unknownVar = 20;
let num3 = 10;
if (typeof unknownVar === "number")
    num3 *= unknownVar;
console.log(num3);
export {};
