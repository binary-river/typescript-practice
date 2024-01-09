
//Object type compatibility
type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "cat",
    color: "yello",
};

let dog: Dog = {
    name: "bowow",
    color: "brown",
    breed: "mix",
};

console.log(animal);
animal = dog;
console.log(animal);