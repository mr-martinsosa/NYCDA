/* Question 1: Reverse a string */

function reverseString(word){
	let reversed = []
	for(let i = 1; i < word.length; i++){
		reversed.push(word[word.length-i])
	}
	reversed.push(word[0])
	return reversed.join("")
}

reverseString("martin")

/* Question 2: Fizzbuzz */

function fizzBuzz(){
	for(let i = 1; i < 101; i++){
		if(i % 15 === 0){
			console.log("FizzBuzz")
		}else if(i % 3 === 0 ){
			console.log("Fizz")
		}else if(i % 5 === 0){
			console.log("Buzz")
		}else{
			console.log(i)
		}
	}
}

fizzBuzz()

/* Question 3: PigLatin */

// function pigLatin(sentence){
// 	for(let i = 0; i < sentence.length; i++){
// 		if(sentence[i].charAt(i) === a || sentence[i].charAt(i) === e || sentence[i].charAt(i) === i ||
// 			sentence[i].charAt(i) === o || sentence[i].charAt(i) === u){
			
// 			let tempWord = sentence[i] //grab word
// 			tempWord += "ay" //append ay to it
// 			sentence[i] = tempWord //replace it in the array
// 		}else if()
// 	}
// }

/* woops, its a string sentence not an array of words" */
/* but we can still make it an array of words...*/

function pigLatin(sentence){
	let pigSentence = sentence.split(" ") //split on white space to make an array of words
	for(let i = 0; i < pigSentence.length; i++){
		if(pigSentence[i].length > 1){ //check if "word" has more than 1 letter
			if(pigSentence[i].charAt(0) === 'a' || pigSentence[i].charAt(0) === 'e' || pigSentence[i].charAt(0) === 'i' ||
				pigSentence[i].charAt(0) === 'o' || pigSentence[i].charAt(0) === 'u'){ //check if word starts with vowel
			
				let tempWord = pigSentence[i] //grab word
				let tempFirstLetter = tempWord.charAt(0) //check first letter
				tempWord += (tempFirstLetter + "ay") //add first letter append ay to it
				tempWord = tempWord.slice(1) //rip off the first letter
				pigSentence[i] = tempWord //replace it in the array
			
			}else{ //assume it doesn't have a vowel so it's a consonant
				
				let tempWord = pigSentence[i] //grab word
				let tempFirstLetter = tempWord.charAt(0) //check first letter
				tempWord += (tempFirstLetter + "ay") //add first letter and apped ay to the end
				tempWord = tempWord.slice(1) //rip off the first letter
				pigSentence[i] = tempWord  //replace it in the array
			}
		}
	}
	return pigSentence.join(" ")
}

let sentence = "Hello it is me"
pigLatin(sentence)