// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.



// Solution:

//Parameter: number 
//Result: return
// Pseudo: 
//return the average of the array rounded down to its nearest integer. 




function getAverage (marks) {
	return Math.floor(marks.reduce((x, y) => x + y, 0) / marks.length);
  }
  

  //result:
 

  