let obj= {
  age:16
}

function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  if(person.age >= 18) return true
  else return false
}

let output= isPersonOldEnoughToVote(obj);
console.log(output)