//custom type guard
//custom guard. 'animal is Dog' return type comment guarantee that animal is Dog when return value is true.
function isDog(animal) {
    return animal.bark !== undefined;
}
function warning(animal) {
    if (isDog(animal)) {
        console.log(animal.bark ? "bark!" : "no bark!");
    }
    else {
        console.log(animal.scratch ? "scratch!" : "no scratch!");
    }
}
let animal = {
    name: "bowow",
    bark: true,
};
warning(animal);
export {};
