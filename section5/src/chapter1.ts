
//interface is very simillar to type alias.
interface Person {
    name: string;
    age?: number;
    readonly nickname:string;
    sayHello: (a:string) => void;
    sayGood(a:number): void;
    sayGood(a:number, b:string):void;
}

let p:Person = {
    name:"person1",
    // age: 100,
    nickname:"nick1",
    sayGood: (a:number) => console.log( a + " million dollar!"),
    sayHello(a:string){
        console.log(a + ", how are you?");
    },
}

let p2:Person = {
    name:"person2",
    nickname:"nick2",
    sayHello:(a:string) => console.log("person2 test"),
    sayHello(a:number,b:string) {
        console.log("person2 test2")
    },
}

// console.log(p);
p.sayGood(10000);
p.sayHello("John")
// p.nickname = "nick2";


//hybrid type interface
interface newTypeFunc {
    (a:number):void;
    b:string;
}

const f1:newTypeFunc = (a:number) => console.log("new type cost : " + a);
f1.b = "newTypeFuncExample";
f1(20);
console.log(f1.b);
