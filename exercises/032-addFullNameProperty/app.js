let person= {
  firstName: 'John',
  lastName: 'Mario'
}

function addFullNameProperty(obj) {
  // Add your code after this line
  obj.fullName= `${obj.firstName} ${obj.lastName}`
  return obj
}

let prueba= addFullNameProperty(person)
console.log(prueba)
console.log(person.fullName)