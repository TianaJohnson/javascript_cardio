/////////////////// SESSION 1 ////////////////////////

// For this file use 'node index' in terminal to run

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // const strArr = str.split('');// no space'' = letter, spaced ' ' = full word
    // strArr.reverse();
    // return strArr.join('');

    // cleaned up 1
    // return str
    //     .split('')   // turn a string into an array
    //     .reverse()   
    //     .join('');   // method returns the array as a string.

    ///////////////////////

    // Decreaseing array For Loop 
    // let revString = '';
    // for(let i = str.length -1; i >= 0; i -- ) { // -1 is needed so it defines the actual array since 0 = 1
    //     revString = revString + str[i];
    // }
    // return revString;

    ///////////////////////

    // Incementing array For Loop
    // let revString = '';
    // for(let i = 0; i <= str.length -1; i++ ) { // -1 is needed so it defines the actual array since 0 = 1
    //     revString = str[i] + revString;
    // }
    // return revString;

    ///////////////////////

    //For Of Loop (char can be anything)
    // let revString = '';
    // for(let char of str) { // -1 is needed so it defines the actual array since 0 = 1
    //     revString = char + revString;
    // }
    // return revString;

    ///////////////////////

    // For Each Loop
    // let revString = '';
    // str.split('').forEach(char => revString = char + revString);
    // return revString;

    //////////////////////

    //reduce
    // return str.split('').reduce(function(revString, char){
    //     return char + revString;
    // }, '');

    //****cleaned up reduce function*****
    return str.split('').reduce((revString, char) => char + revString, '');
       
  }
  
  
  
  // CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  
  /// reverse string = string turned into array, reveresed, turned back into a string
  function isPalindrome(str) { 
      const revString = str
        .split('')   // turn a string into an array
        .reverse()   // reverse, duh
        .join('');   // method returns the array as a string.

        return revString === str;
  }
  
  
  
  // CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  
  function reverseInt(int) {
      const revString = int
        .toString()     // turns integer into a string
        .split('')      // turn a string into an array
        .reverse()
        .join('')

        return parseInt(revString) * Math.sign(int); // Math.sign = function returns either a positive or negative +/- 1,
                                                     // indicating the sign of a number passed into the argument
  }
   
  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
  function capitalizeLetters(str) {
    // const strArr = str
    //     .toLowerCase()   // makes everything lower case
    //     .split(' ');     // turn a string into an array, with space so we get the words 

    // for(let i = 0; i < strArr.length; i++) {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }
    // return strArr.join(' ');


    //////////////////


    //Second Option cleaned up edition
    // return str
    //     .toLowerCase()
    //     .split(' ')
    //     .map((word) => word[0].toUpperCase() + word.substr(1))
    //     .join(' ');


    ///////////////////

    //Regular Expressions
    /// omg what the heck is this
    return str.replace(/\b[a-z]/gi, function(char){
        return char.toUpperCase();
    })
  }


  
  
  
  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('javascript') == 'a'
  function maxCharacter(str) {
        const charMap = {};
        let maxNum = 0;
        let maxChar = '';

        str.split('').forEach(function(char) {
            if(charMap[char]){
                charMap[char]++;
            } else {
                charMap[char]= 1;
            }
        });

       for(let char in charMap) {
           // debugger;   // node inspect index.js then hit c enter to run. 
           if(charMap[char] > maxNum) {
               maxNum = charMap[char];
               maxChar = char;
           }
       }
       return maxChar;
  }
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz() {
      for( let i = 1; i <= 100; i ++) {
          if(i % 15 === 0){
              console.log('FizzBuzz');
          }
          else if(i % 3 === 0) {
              console.log('fizz');
          } else if(i % 5 === 0){
            console.log('Buzz');
          } else {
              console.log(i);
          }
      }
  }
  
  

    //Random function asked at a interview - TJ
    // Return the lowest and the highest number from and array

    const numbers = [2, 4, 9, 2, 0, 16, 24, -8, 15, 2018 ];

    const smallest_number = Math.min(...numbers); //...numbers calls a spread on the array
    const largest_number = Math.max(...numbers);

    console.log('Smallest Value:', smallest_number); // Smallest Value: 0
    console.log('Largest Value:', largest_number);   // Largest Value: 24

////////////////////////

//Second option of find min / max

// var numbers = [2, 4, 9, 2, 16, 24, 12, 219, 652, 0.00928 ];
// var largest = -Infinity;
// var smallest = Infinity;

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//         smallest = numbers[i];
//     }
// }

// console.log(largest);
// console.log(smallest);

///////////////////

//3rd

// const array = [37,-5,-15,-37,5,15]

// const forLoopMinMax = () => {
//   let min = array[0], max = array[0]

//   for (let i = 1; i < array.length; i++) {
//     let value = array[i]
//     min = (value < min) ? value : min
//     max = (value > max) ? value : max
//   }

//   return [min, max]
// }

// const [forLoopMin, forLoopMax] = forLoopMinMax()
// console.log(`Minimum: ${forLoopMin}, Maximum: ${forLoopMax}`) // Minimum: -37, Maximum: 37

///////

//4th, reduced

// const array = [37,-5,-15,-37,5,15]

// const minUsingReduce = () => array.reduce((min, currentValue) => Math.min(min, currentValue), array[0])
// const maxUsingReduce = () => array.reduce((max, currentValue) => Math.max(max, currentValue), array[0])
// console.log(`Minimum: ${minUsingReduce()}, Maximum: ${maxUsingReduce()}`) // Minimum: -37, Maximum: 37
  
   // Call Function
 // const output = reverseString('hello');
 // const output = isPalindrome('racecar');
 // const output = reverseInt('-01234');
//  const output = capitalizeLetters('i love javascript')
    // const output = maxCharacter('javascript');
    //const output = fizzBuzz();
    //console.log(output);

    //////////////////////////////////////////////////////////////

    /////////////////// SESSION 2 ////////////////////////////////
    
// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    //regular expretion example
const wordArr = sen.toLowerCase().match(/[ a-z0-9 ]+/g);   //regular exprection goes between // a-z 0-9
                                                            //g = global, meaning it doesnt stop at the first match, it keeps going
    console.log(wordArr);
  }

  // Call Function
const output = longestWord('Hello, my name is Brad');

console.log(output);