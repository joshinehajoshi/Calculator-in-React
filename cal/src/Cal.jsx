function Add(a,b) {
    let sum = a+b;
    return sum;
}

function Sub(a,b) {
    let minu = a-b;
    return minu;
}

function Mult(x,y){
    let mu = x*y;
    return mu;
}

function Divi(p,q){
    let di = (p/q).toFixed(2);
    return di;
}

export {Add, Sub, Mult, Divi}