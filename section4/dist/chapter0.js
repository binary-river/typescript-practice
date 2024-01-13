function funcA(a, b) {
    return a + b;
}
const funcB = (a, b) => {
    return a + b;
};
function funcC(name = "abc") {
    console.log("parameter which has default value doesn't need a type declaration");
    console.log("name : " + name);
}
function funcD(name = "abc", tall) {
    console.log("parameter with ? is selective parameter. it's type always a union type of undefined and declared type");
    console.log(typeof tall);
    if (typeof tall === "number") { //need to narrow type to use as number.
        console.log(tall.toFixed());
    }
    console.log("selective parameter can not be positioned ahead of normal parameter.");
}
//rest
function funcE(...rest) {
    let sum = 0;
    rest.forEach((it) => sum += it);
    console.log(sum);
}
export {};
