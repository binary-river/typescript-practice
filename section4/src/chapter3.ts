
//function overloading
function funA(a:number): void;
function funA(a:number, b:number): void;


function funA(a:number,b?:number) {
    if( typeof b === "number" ) {
        console.log(a+b);
    } else {
        console.log(a*2);
    }
}


funA(10,5);
funA(20);