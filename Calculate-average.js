
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.





// Solution:
//Parameter: numbers
//Result: return
// Pseudo:
// calculate the average of the numbers in array
//empty arrays should return 0
      

function find_average(array) {
	return array.reduce((a,b) => a + b, 0) / array.length || 0;
   
   }



//result
