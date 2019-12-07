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
  function maxCharacter(str) {}
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  function fizzBuzz() {}
  
  
  
   // Call Function
 // const output = reverseString('hello');
 // const output = isPalindrome('racecar');
 // const output = reverseInt('-01234');
 const output = capitalizeLetters('i love javascript')
  
  console.log(output);
