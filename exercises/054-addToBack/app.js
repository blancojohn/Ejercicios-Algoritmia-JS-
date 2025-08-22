function addToBack(arr, element) {
  // your code here
  arr.push(element) // Agrega el elemento pasado al final del array 
  return arr
}

let output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]
