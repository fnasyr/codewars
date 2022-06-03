
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)



//Solution:
//Parameter: number
//Result: console
//Pseudo: If The bullets numbers are equal to double of dragons numbers,than the hero will surive. Return true (the bullets numbers must be bigger than the dragons numbers)
//if the bullets numbers are smaller than the dragons numbers. the result will be false





function hero(bullets, dragons){ 
    if (bullets >= dragons * 2) {
      return true
    } else {
      return false
    }
  }
  //result:
  console.log(hero(2,4))
  console.log(hero(10,1))
  console.log(hero(5,30))


