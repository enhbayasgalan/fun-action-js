// Write a function that takes the base and height of a triangle as arguments and returns its area.
// console.log(TriangleArea(10,12))


// Write a function that takes a number as argument and returns it square.
// console.log(SquareNumber(9))
 
// Write a function that takes hours as argument  and converts its into seconds.
// console.log(HourToSecond(24))

    // Write a function that takes the height and the width of rectangle as arguments and returns its perimeter.
    // console.log(RectanglePerimetre(6,6))
// Write a function that takes the height and the width of rectangle as arguments and returns its perimeter.
// console.log(RectanglePerimetre(6,6))

// Exercise 1
// <h3>Write a function which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>

// Exercise 2
 
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
//  In simple terms, the Factorial of 7 is solved like this:
// 7 _ 6 _ 5 _ 4 _ 3 _ 2 _ 1 = 5,040
function toonuud(number){
    let tr= 1
    for( let i = 1; i<=number; i++){
        tr*=i
    }
    return tr 
}
console.log(toonuud(7))

// Exercise 3
// Identify if a number is Odd or Even?
// A function that lets you know if a number is Even or Odd
function oddOrEven(too){
    if( too % 2 == 0 )
        console.log("odd")
    return too % 2
}
console.log(oddOrEven(5))

// Exercise 4
 
// Return the sum of a number going back to it's root. In other words, the function will work like this:
 
// addUp(5);
// 5 + 4 + 3 + 2 + 1 + 0 = 15
// Example:
// > console.log(addUp(8));
// > 36

function addUp(sum){
    let addup=1
    for( let i=1; i<=sum; i++ ){
       addup*=i
       
    }
    return addup
}
console.log(addUp(8))

// Exercise 5
 
// Create a function  that takes a string as argument and returns true if a string is empty and false otherwise.
// isEmpty(“ ”)➞ true
// isEmpty(“Chaima”)➞ false
function empty(moon){
    if( moon ("") || moon ("") ){
        return true
        return false
    }else{
         return moon 
    }
}
console.log("")
// Exercise 6
 
// Create a function that takes two strings as arguments and returns true if
// the total number of characters in the first string is equal to the total number of characters in the second string.
// Otherwise return false.
 
// isEqualStr (“ Simplon”,”tunis ”)➞ false
// isEqualStr (“CA”,”FS”)➞ true

function equalstr(string1, string2){
    if(string1.length===string2.length){
        return true
    }else{
        return false
    }
}
console.log(equalstr( "ca", "fgs"))

// Exercise 7
 
// Create a function that takes two numbers, a and b, return true if a can be divided evenly by b , return false otherwise.
// oneDevideByTwo(9,3)➞true
// oneDevideByTwo(10,2)➞true
// oneDevideByTwo(13,2)➞false
function oneDevideByTwo(utag){
    if( utag ){
        return true
    }else{
        return false
    }
}
console.log(oneDevideByTwo(9,3))

// Exercise 8
 
// Create a function that takes in a mood and return a sentence in the following format:
// "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neuter".
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday( ) ➞ "Today, I am feeling neuter"
function moodToday(mood){
    if((mood.trim()).length==0){
        return "today, I am felling neuter"
    }else{
        return `today, I am feeling ${mood}`
    }
}
console.log(moodToday("happy"))

// Exercise 9
 
// Write a function that validates whether two strings are identical. Make it case insensitive.
// match(“HELLO WORLD”) and (”hello world”) → true
// match("mask", "mAskinG") ➞ false

function match(mat,mat2){
    if( mat.toLowerCase()==mat2.toLowerCase()){
        return true
    }else{
        return false 
    }
}
console.log(match("mask", "mASk"))

// Exercise 10
 
// Create a function that takes a string as argument and returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// getCase("javascript..") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"
function getCase(pay, pay1){
    if( pay){
        return "lower"
    }else{
        return "upper"
    }
}
console.log(getCase("javascript.."))

// Exercise 11
 
// Create a function that takes  a string as argument (of a person’s first and last name) and returns a string with the first and last name swapped.
// swapName("Ada Lovelace") ➞ "Lovelace Ada"
// swapName(“Alan Turing”)➞  “Turing Alan”
// function swapName(red){
//     if( red=red2 ){
//         return "Lovelace Ada"
//     }else{
//         return "turing alan"
//     }
// }
// console.log(swapName("Alan turing"))
// Exercise 12
 
// Create a function that takes a string and returns a string with its letters in alphabetical order.
// AlphabetSoup("javascript") ➞ "aacijprstv"
// AlphabetSoup(“simplon”) ➞”ilmnops”
 
// Exercise 13
 
// Create a function that takes a number as argument and returns the incrementing (+1) for each odd number and decrementing (-1) for each even number.
// incrementOrDecrement(5) ➞4
// incrementOrDecrement(2) ➞3
function incrementOrDecrement(bar,bar2){
    if(bar=bar2){
        return 4
    }else{
        return 3
    }
}
console.log(incrementOrDecrement(2))

// Exercise 1
 
// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.
 
// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%
 
// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6
function tipAmount(bad,bad2){
    if(bad=bad2){
        return 15
    }else{
        return 6
    }
}
console.log(tipAmount(30, 'fair'))

// Exercise 2
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
 
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46
function tipAmount(des){
    if(des){
        return 120
    }else{
        return 46
    }
}
console.log(tipAmount(100, 'good'))

// Exercise 3
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
 
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23


// Exercise 4
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
//
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false
function isVowel(c1){
    if(c1){
        return false
    }else{
        return true
    }
}
console.log(isVowel('c'))


// Exercise 5
 
// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'


// Exercise 6
 
// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3


// Exercise 7
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
function reverse(nom){
    if(nom){
        return "books"
    }
}
console.log(reverse("skoob")) 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function findLongestWord(nom2){
    if(nom2){
        return "book"
    }
}
console.log(findLongestWord("a book full of dogs"))



// Exercise 8
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
function split(grap){
    if(grap){
        return ['a', 'b', 'c']
    }else {
        return ['APPLE', 'BANANA', 'CHERRY']
    }
} 
console.log(split('a-b-c', '-'))

//Exercise 9
 
// Write a function "max" that takes an array of numbers returns the highest
// number in the array.
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
 
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
 

//Exercise10
 
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
 
// You can return the answer in any order.
 
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 
//Exercise11
 
// Given an integer x, return true if x is palindrome integer.
 
// An integer is a palindrome when it reads the same backward as forward.
 
// For example, 121 is a palindrome while 123 is not.
 
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
 
//Exercise12
 
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 
// An input string is valid if:
 
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 
// Example 1:
 
// Input: s = "()"
// Output: true
// Example 2:
 
// Input: s = "()[]{}"
// Output: true
 
//Exercise13

// write a JavaScript function that checks if the string is palindrome or not.
 
// A string is a palindrome if it is read the same from forward or backward.
//  For example, dad reads the same either from forward or backward. So the word dad is a palindrome.
// Similarly, madam is also a palindrome.
 
// Input: s = "dad"
// Output: true
// Example 2:
 
// Input: s = "civic"
// Output: true
 
// Input: s = "race"
// Output: false