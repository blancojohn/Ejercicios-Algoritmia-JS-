function getAllWords(str) {
    // your code here
    let arrayWords= str.split(" ")
    return arrayWords
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
