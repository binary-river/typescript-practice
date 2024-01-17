let p = {
    name: "person1",
    // age: 100,
    nickname: "nick1",
    sayGood: (a) => console.log(a + " million dollar!"),
    sayHello(a) {
        console.log(a + ", how are you?");
    },
};
// console.log(p);
p.sayGood(10000);
p.sayHello("John");
const f1 = (a) => console.log("new type cost : " + a);
f1.b = "newTypeFuncExample";
f1(20);
console.log(f1.b);
export {};
