function getElementsUpTo(array, n) {
  // your code here
  let arrElemtsUpto= array.slice(0, n)
  return arrElemtsUpto
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
