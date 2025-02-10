function isOldEnoughToVote(age) {
  // your code here
  let person= false 
  if(age >= 18){
    person= true
}
  return person
}

console.log(isOldEnoughToVote(17))
