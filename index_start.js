// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    //regular expretion example
const wordArr = sen.toLowerCase().match(/[ a-z0-9 ]+/g);   //regular exprection goes between // a-z 0-9
                                                        //g = global, meaning it doesnt stop at the first match, it keeps going
  }