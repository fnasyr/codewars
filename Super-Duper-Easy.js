

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
	



function problem(x){
if(typeof x === 'string'){
    return 'Error';

}else{
    return x * 50 + 6;
}

}

//result
//console.log(problem(2))//106
////console.log(problem(-20))//-994
//console.log(problem('working'))//'Error'