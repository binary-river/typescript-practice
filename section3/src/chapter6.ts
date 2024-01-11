
//type assertion
type Person = {
    name: string;
    age : number;
};

let person:Person = {} as Person;

let person2:Person = {
    name: "jason",
    age : 50,
    home: "newyork",
} as Person;


let a = 3 as unknown as string;
let b:string = a;


let num1 = 10 as const; // number literal by const type assertion.
let cat = {
    name: "catty",
    color: "white",
} as const; // all properties turn to read only values by const type assertion.


type Post = {
    title: string,
    author?: string,
};

let post: Post = {
    title: "title1",
};

const len:number = post.author!.length;
// console.log(len);