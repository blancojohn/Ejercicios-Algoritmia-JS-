function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    let boolean;
    // evalua las condicines que uno de los parámetros sea un número par y los dos obligatoriamente menores que 9
    if((num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9)){
        boolean= true
    }else{
        boolean= false
    }
    return boolean
}

let output = isEitherEvenAndLessThan9(6, 9);
console.log(output); // --> true
