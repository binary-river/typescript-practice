
//custom type guard

type Dog = {
    name:string;
    bark:boolean;
}

type Cat = {
    name:string;
    scratch:boolean;
}

type Animal = Dog | Cat;


//custom guard. 'animal is Dog' return type comment guarantee that animal is Dog when return value is true.
function isDog(animal:Animal): animal is Dog {
    return (animal as Dog).bark !== undefined;
}

function warning(animal:Animal) {
    if( isDog(animal)) {
        console.log(animal.bark ? "bark!":"no bark!");
    } else {
        console.log(animal.scratch ? "scratch!":"no scratch!");
    }
}

let animal:Animal = {
    name:"bowow",
    bark:true,
}

warning(animal);