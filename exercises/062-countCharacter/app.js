function countCharacter(str, char ) {
    // your code here
    let timesAppeared= 0;
    for(let i= 0; i < str.length; i ++){
        if( str[i] === char){
            timesAppeared += 1
        }
    }
    return timesAppeared
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
