// compatiblity of function type 
type A = () => number;
type B = () => 10;

let a:A = () => 20;
let b:B = () => 10;

a = b;    // by return type, sub type of return function can be assigned to super type of return function 
// b = a; // opposite is impossible.


type C = (a:number) => number;
type D = (a:10) => number;
type E = (a:30) => number;

let c:C = (a:number) => 20;
let d:D = (a:10) => 30;
let e:E = (a:30) => 40;

// c = d;  //unlike return type, sub type parameter function can not be assigned can not be assigned to super type paramter function
d = c;     // opposite is possible
// e = d;  //this is also impossible


type Animal = {
    name:string;
}

type Dog = {
    name:string;
    color:string;
}

let animalFunc = (animal:Animal) => {
    console.log(animal.name);
}

let dogFunc = (dog:Dog) => {
    console.log(dog.name);
}

dogFunc = animalFunc;
// animalFunc = dogFunc;  //this is impossible because dogFunc assumes that parameter has color property, but animalFunc does not assumes
// that parameter has color property.



let f1 = (a:number, b:string) => 10;
let f2 = (a:number) => 10;
f1 = f2;
// f2 = f1;  //this can not be used

