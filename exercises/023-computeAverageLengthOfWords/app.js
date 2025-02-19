// Write your function here
const computeAverageLengthOfWords= (word1, word2)=>{
    let totalLetters= word1.length + word2.length
    let promedio= totalLetters / 2
    return promedio
}

console.log(computeAverageLengthOfWords("code", "programs"))