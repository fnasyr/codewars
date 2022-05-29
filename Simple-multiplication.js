//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise. 


// Solution:
//Parameter: number
//Result: console 


//if number is even Example:(2,4,6,8,10) => then, number*8
//if number is odd Example:(1,3,5,7,11) => then, number*9

function simpleMultiplication(number) {
	if(number % 2 == 0) {
	  return(number*8)
	  // Pseudo:
      // if number is even then multiply number by 8
      // any other number multiply number by 9
  }
  else {
	return(number*9)
	}
}
//Example:
  simpleMultiplication(20) // 160
  simpleMultiplication(3) // 27
  simpleMultiplication(700) // 6300 