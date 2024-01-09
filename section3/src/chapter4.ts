
//algebraic
//union type
let a: number | string;
a = 1;
a = "hello world";

let arr:(number|string|boolean)[] = ["1", 2, true, "helloworld"];

type Animal = {
    name: string;
    color: string;
    tail: string;
};

type Human = {
    name: string;
    age : number;
    skin: string;
};

type AnimalHuman = Animal | Human;

let ah: AnimalHuman = {
    name: "helloworld",
    color: "new color",
    tail: "long",
    skin : "white",
};

console.log(ah);

type Intersection = Animal & Human;

let ah2: Intersection = {
    name : "inter1",
    color : "brown",
    tail : "long",
    age : 0,
    skin: "white",
};

console.log(ah2);
