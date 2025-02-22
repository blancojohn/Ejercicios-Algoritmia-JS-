let person=  {
  name: 'John',
  profession: 'Developer'
}

function removeProperty(obj, key) {
  // your code here
  return delete obj[key]
}

console.log(person)
removeProperty(person, 'profession')
console.log(person)
console.log(person.profession)


