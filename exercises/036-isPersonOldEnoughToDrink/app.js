let obj= {
  age: 12
}

function isPersonOldEnoughToDrink(person) {
  // Add your code after this line
  /* Validavque cumple mayoría de edad y que el objeto pasado contiene
    contiene la propiedad age */
  if(person.age >= 21) return true 
  else return false 
}

let output= isPersonOldEnoughToDrink(obj)
console.log(output)