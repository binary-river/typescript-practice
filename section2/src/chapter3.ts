
//object
let user: object = {
    id: 1,
    name: "hello",
};

//literal
let user2: {
    readonly id:number,
    name: string,
} = {
    id: 1,
    name: "hello",
};

console.log(user2.id);
//user2.id = 2;

let dog: {
    name:string,
    color:string,
} = {
    name:"pup1",
    color: "gray",
};

console.log(dog.name);

//optional property
let user3: {
    id?:number,
    name:string,
} = {
    id:1,
    name:"hello",
};

user3 = {
    name:"world",
};

console.log(user3.id);