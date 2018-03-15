/*Question 1*/
function calculator(word = "add", num1 = 0, num2 = 0){
	if(word === "add"){
		return num1 + num2
	}else if(word === "subtract"){
		return num2 - num1
	}else if(word === "multiply"){
		return num1 * num2
	}else if(word === "divide"){
		return num2 / num1
	}else{
		return `Please input a proper operator.`
	}

}

calculator("add", 4, 2)
calculator("subtract", 4, 2)
calculator("multiply", 4, 2)
calculator("divide", 4, 2)


/* Question 2*/
let questions = [
  "Was Kim born in 1985?",
  "Will Rob get out of jail?",
  "Does North seem happy?",
  "Kanye released 'Heartless' in 2008?"
 ]

let answers = [
  "yes",
  "no",
  "no",
  "yes"
 ]

function ask(question, answer){
	let counter = 0
	for (let i = 0; i < question.length; i++) {
		let answer = prompt(question[i])
		if(answer === answers[i]){
			counter += 1
		}
	}
	console.log(`Your score is: ${counter}`)
}

ask(questions, answers)


/* Bonus 2*/
function factorial(num){
	if(num === 1) { return 1 }
	return num * factorial(n-1)
}