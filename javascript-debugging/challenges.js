/* Challenge 1
Given an arbitrary integer as a celsius temperature, create an algorithm to convert it to a fahrenheit temperature. */
function celsiusToFahrenheit(temp){
	temp = Math.floor((temp * 1.8) + 32)
	return temp
}

celsiusToFahrenheit(40)

/* Challenge 2 
Given an array of unsorted numbers, create an algorithm to sort them in descending order.*/
function sortDecending(numbers){
	return numbers.sort(function(a, b){
		return b - a
	});
}

let numbersArr = [1, 0, 21, 2, 506, 9, 67]
sortDecending(numbersArr)

/* Challenge 3
Given an the following array of unsorted numbers create an algorithm to find an arbitrary element in the array. */
function findElement(number){
	let numbers = [1, 0, 21, 2, 506, 9, 67]
	// numbers = numbers.sort(function(a, b){
	// 	return b - a
	// });
	for(let i = 0; i < numbers.length; i++){
		if(number === numbers[i]){
			return `Located at index ${i}`
		}
	}
}

findElement(21)

/* Challenge 4
You and your friends are getting dinner at your favorite restaurant. 
Create a function named tipAmount that when given a total bill value, number of people, and a tip percentage; 
uses this information to calculate the tip amount and return this value in a string that says "${Tip Amount} per person" */


function tipAmount(bill, numOfPeople, tip){
	tip = parseFloat((tip / 100).toFixed(2)) //convert to float to 2 decimals
	let pricePerPerson = bill / numOfPeople
	let tipPerPerson = pricePerPerson * tip
	return `$ ${tipPerPerson} per person.`
}

console.log(tipAmount(100, 3, 12))
/* does not work with whole numbers as tip */
console.log(tipAmount(50, 5, 10)) // "$1 per person".



/* Challenge 5
_IBM has hired you to build them a simple calculator. Create a function named ibmCalc that when given two numbers 
and a string which can be one of the following ( "add" , "subtract" , "multiply" , "divide" ) will return the 
result of the operation performed on the two numbers. If a bad value for the operation is provided return a error 
string that says "That is not a valid operation"

*/

function ibmCalc(operations, numOne, numTwo){
	if (operations === "+") {
		return numOne + numTwo
	}else if (operations === "-") {
		return numTwo - numOne
	}else if (operations === "*") {
		return numOne * numTwo
	}else if (operations === "/") {
		return numTwo / numOne
	}else{
		return `That is not a valid operation`
	}
}

console.log(ibmCalc("+", 1, 2))
console.log(ibmCalc("-", 1, 2))
console.log(ibmCalc("*", 1, 2))
console.log(ibmCalc("/", 1, 2))
console.log(ibmCalc("Martin", 1, 2))
console.log(ibmCalc(1,5, "multiply"))

/* Challenge 6
You're tasked with creating a string parser that will tell you how many times a letter appears in a string. 
Create a function called parser that given a letter ( Ex. "a" ) and a string ("Ex : daslndeungnsio393c810sx") 
can return how many times that letter appears. */

function parser(letter, letterInString){
	let counter = 0
	letterInString = letterInString.split("").sort().join("")
	for(let i = 0; i < letterInString.length; i++){
		if (letterInString[i] === letter){
			counter++
		}
	}
	return counter
}

let strings = "daslndeungnsio393c810sx"

console.log(parser("g", strings))
console.log(parser("a", "aaaa3fvsdfr"))