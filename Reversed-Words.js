// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"



//Solution 

//Parameter: string
//Result: return
//Pseudo: you need to reverse all the string words from left to right




function reverseWords(str){
    return str.split(' ').reverse().join(' ');


  }
  
  //result
  //reverseWords("hey","codewars","here")// ("here","codewars","hey")