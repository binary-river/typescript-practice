let person = {};
let person2 = {
    name: "jason",
    age: 50,
    home: "newyork",
};
let a = 3;
let b = a;
let num1 = 10; // number literal by const type assertion.
let cat = {
    name: "catty",
    color: "white",
}; // all properties turn to read only values by const type assertion.
let post = {
    title: "title1",
};
const len = post.author.length;
console.log(len);
export {};
