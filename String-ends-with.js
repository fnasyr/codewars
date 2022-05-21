// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false 



// Solution:

//Parameter: string
//Result: return
// Pseudo:
// if the return is the ending of string, then return true
//otherwise, return false 




function solution(str, ending){
    if (ending.length < 1){
      return true;
    }
    return str.slice(-ending.length,str.length) == ending
  }

