function getAllLetters(str) {
    // your code here
    let arrCharactersWord= [];

    if(str === ''){
        arrCharactersWord= []
    }

    for (let i= 0; i < str.length; i++){
        let character= str[i]
        arrCharactersWord.push(character)
    }
    return arrCharactersWord
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
