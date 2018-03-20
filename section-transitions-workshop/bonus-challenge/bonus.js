document.addEventListener("DOMContentLoaded", (event) => { 
	document.addEventListener("keypress", (event) => {
		let updateHeader = document.querySelector("h1") //grab h1 tag
		let keyName = event.key //grab keypress
		updateHeader.innerText = keyName //set keypress to value of h1
	})

	let submitButton = document.getElementById("submit-button")
	submitButton.addEventListener("click", (event) => {
		let updateHeader = document.querySelector("h1") //grab h1 tag
		let passwordCheck = document.querySelector("password-input").value //breaks here claiming null
		//console.log(document.querySelector("password"))
		let usernameCheck = document.querySelector("username-input").value
		let hasNumber = /\d/ //regex to check for number in string
		
		if(passwordCheck == 12345678 && usernameCheck.match(hasNumber).length > 0){ 
		//used == for string vs int and compared to a regex match to a number which returns an array. if bigger than 0, there was a match so username accepted.
			updateHeader.innerText = "Correct"
		}else{
			updateHeader.innerText = "Incorrect"
		}
	})

}) 

