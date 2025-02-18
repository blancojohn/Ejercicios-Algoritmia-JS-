// Write your function here
const isEvenLength= (word)=>{
    let quantityLetters= word.length
    if(quantityLetters % 2 === 0) return true
    else return false
}

console.log(isEvenLength("mario"))