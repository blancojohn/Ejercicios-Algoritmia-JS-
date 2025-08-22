function addToFront(arr, element) {
  // your code here
  arr.unshift(element) //agrega en la posición cero el elemento
  return arr
}

let output = addToFront([1, 2], 6);
console.log(output); // -> [3, 1, 2]
