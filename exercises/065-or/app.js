function or(expression1, expression2) {
  return !(!expression1 && !expression2);
}

let output = or(false, false);
console.log(output); // --> true;
