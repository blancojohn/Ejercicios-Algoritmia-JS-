function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    let boolean;
    if((num1 % 2 == 0 || num2 % 2 == 0) || (num1 == 7 && num2 == 7)){
        boolean= true
    }else {
        boolean= false
    }
    return boolean
}
let outFunction= isEitherEvenOrAreBoth7(3,4)
console.log(outFunction)
