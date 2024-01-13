
//function type expression
type Add = (a:number, b:number) => number;

const addImpl: Add = (a,b) => a+b;
const addImpl2: Add = (a,b) => a-b;

//call signature
type Operation = {
    (a:number, b:number): number;
    // n1:string;  //normal properties can be added to call signature 
}

const addOp:Operation = (a,b) => a*b;