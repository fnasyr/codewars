// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


//Solution:

//Parameter:(string/char,number,different number)
//Result: return
// Pseudo:
// If string/char is + : number + different number
// If string/char is - : number - different number
// If string/char is * : number * different number
// If string/char is / : number / different number


  


function basicOp(operation, value1, value2){
  
  if( operation == "+") {
    return value1 + value2
  }else if( operation == "-") {
    return value1 - value2
  }else if( operation == "*") {
    return value1 * value2
  } else if( operation == "/") {
    return value1 / value2
  }
  }






//   Second Solution:
//   function basicOp(operation, value1, value2){
//   return eval(value1+operation+value2);
// }