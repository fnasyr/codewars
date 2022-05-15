
// You are given a binary string (a string consisting of only '1' and '0'). The only operation that can be performed on it is a Flip operation.

// It flips any binary character ( '0' to '1' and vice versa) and all characters to the right of it.

// For example, applying the Flip operation to the 4th character of string "1001010" produces the "1000101" string, since all characters from the 4th to the 7th are flipped.

// Your task is to find the minimum number of flips required to convert the binary string to string consisting of all '0'.

// Example
// For s = "0101", the output should be 3.

// It's possible to convert the string in three steps:

// "0101" -> "0010"
//    ^^^
// "0010" -> "0001"
//     ^^
// "0001" -> "0000"
//      ^
// Input/Output
// [input] string s
// A binary string.

// [output] an integer
// The minimum number of flips required.

function binStr(s) {
    return (s.replace(/^0+/g,'').match(/0+|1+/g)||[]).length
  }
 