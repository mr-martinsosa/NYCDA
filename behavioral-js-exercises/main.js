document.addEventListener("DOMContentLoaded", (event) => { //use this function setup to load script tag js at top of html page
	let nycda_title = document.getElementById("nycda-title")
	nycda_title.innerText = "Welcome to NYCDA"

	let nycda_help = document.getElementById("nycda-help-message")
	nycda_help.innerHTML = "Ask people in NYCDA for help if you're struggling."

	let nycda_class = document.getElementsByClassName("nycda-class")
	console.log(nycda_class[3])

	let paragraphs = document.getElementsByTagName("p")
	console.log(paragraphs[1])

	let redBorder = document.querySelector("input")
	redBorder.style.borderColor = "red"

	let submitButton = document.getElementById("submit-button")
	submitButton.addEventListener("click", (event) => {
		let grabValue = document.getElementById("input-important").value
		console.log(grabValue)
	})
})