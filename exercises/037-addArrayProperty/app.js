let myObj= {};
let myArr= [1,2,3]


function addArrayProperty(obj, key, arr) {
  // Add your code after this line
  obj[key]= arr
  return obj
}

addArrayProperty(myObj, 'myProperty', myArr)
console.log(myObj.myProperty)