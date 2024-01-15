function funA(a, b) {
    if (typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log(a * 2);
    }
}
funA(10, 5);
funA(20);
export {};
