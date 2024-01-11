//type narrowing
let f1 = (value) => {
    if (typeof value === "number") { // type guard
        console.log(value.toFixed());
    }
    else if (typeof value === "string") { // type guard
        console.log(value.toUpperCase());
    }
    else if (value instanceof Date) { //type guard
        console.log(value.getTime());
    }
    else if (value && "age" in value && typeof value.age === "number") {
        console.log("age is : " + (value.age + 1));
    }
};
export {};
