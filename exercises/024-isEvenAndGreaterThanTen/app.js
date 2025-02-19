// Write your function here
const isEvenAndGreaterThanTen = (num)=> {
    if(num > 10 && num % 2 === 0) return true
    else return false
}

let outPut= isEvenAndGreaterThanTen(8)
console.log(outPut)