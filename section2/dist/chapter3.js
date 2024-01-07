//object
let user = {
    id: 1,
    name: "hello",
};
//literal
let user2 = {
    id: 1,
    name: "hello",
};
console.log(user2.id);
//user2.id = 2;
let dog = {
    name: "pup1",
    color: "gray",
};
console.log(dog.name);
//optional property
let user3 = {
    id: 1,
    name: "hello",
};
user3 = {
    name: "world",
};
console.log(user3.id);
export {};
