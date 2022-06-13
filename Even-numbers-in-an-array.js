// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


function evenNumbers(array, number) {
    return array.filter(x =>x % 2 == 0)
      .reverse()
      .slice(0,number)
      .reverse()
      
      
      
    }

console.log(evenNumbers([12,1,2,3,5,7,9],2))//[12,2]
console.log(evenNumbers([5,1,4,11,5,7,9],3))//[4]
console.log(evenNumbers([10,25,7,19,8,3,4],3))//[10,8,4]