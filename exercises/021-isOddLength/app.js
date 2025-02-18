// Write your function here
const isOddLength= (word)=>{
    let numberLetters= word.length
    if(numberLetters % 2 !== 0) return true
    else return false 
}

console.log(isOddLength("Mary"))