let obj= {
  age: 16
}

function isPersonOldEnoughToDrive(person) {
  // Add your code after this line
  if(person.age >= 16) return true
  else return false
}

let output= isPersonOldEnoughToDrive(obj)
console.log(output)