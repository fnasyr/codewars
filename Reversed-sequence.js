
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]





//Solution:

//Parameter:number
//Result: return
//Pseudo:return array of integers from n to number 1. n is bigger than zero
	

const reverseSeq = n => {
    const arr = [];
    for(let i = 0; i < n; i++){
      arr.push((n-i));
    }
      return arr;
  };


