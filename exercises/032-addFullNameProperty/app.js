let person= {
  firstName: 'John',
  lastName: 'Mario'
}

function addFullNameProperty(obj) {
  // Add your code after this line
  objfullName= `${obj.firstName} ${obj.lastName}`
  return obj
}

addFullNameProperty(person)
console.log(person.fullName)