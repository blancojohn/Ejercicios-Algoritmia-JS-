function getElementsAfter(array, n) {
  // your code here
  let indexSinguienteDelDado= n + 1
  let nuevoArray= array.slice(indexSinguienteDelDado)
  return nuevoArray
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
