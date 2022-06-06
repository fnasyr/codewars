

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string. 




//Parameter: string
//Result: console
//Pseudo: return the string without any exclamation marks




function removeExclamationMarks(s) {
    return s.replace(/!/g,'');
 }


//result
console.log(removeExclamationMarks("codewars!"))//"codewars"
console.log(removeExclamationMarks("!WOW"))//"WOW"
