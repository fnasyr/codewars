

//  After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

//  You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
 
//  Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
 
//  Write a code that gives out the total amount for different days(d).





//SOLUTION:
//Parameter: number
//Result: console
//Pseudo: For everyday renting the car is 40 dollars. Every time you rent the car for 7 or more than 7 days you recieve 50 dollars off.
//Every time you rent the car for 3 days or more, than you receive 20 dollars off. Write a code showing that total amount for different days.




	function rentalCarCost(d) {
		var total = d*40
		if( d>=7)
		return total-=50
		else if(d>=3)
		return total-=20
		else 
		return total
		
		}
		console.log(rentalCarCost(2))//80
		console.log(rentalCarCost(9))//310
		console.log(rentalCarCost(5))//180