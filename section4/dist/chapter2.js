let a = () => 20;
let b = () => 10;
a = b; // by return type, sub type of return function can be assigned to super type of return function 
let c = (a) => 20;
let d = (a) => 30;
let e = (a) => 40;
// c = d;  //unlike return type, sub type parameter function can not be assigned can not be assigned to super type paramter function
d = c; // opposite is possible
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.name);
};
dogFunc = animalFunc;
// animalFunc = dogFunc;  //this is impossible because dogFunc assumes that parameter has color property, but animalFunc does not assumes
// that parameter has color property.
let f1 = (a, b) => 10;
let f2 = (a) => 10;
f1 = f2;
export {};
// f2 = f1;  //this can not be used
