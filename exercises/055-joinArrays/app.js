function joinArrays(arr1, arr2) {
  // your code here
  let arraysUnidos= arr1.concat(arr2)
  return arraysUnidos
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
