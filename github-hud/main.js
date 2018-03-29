axios.get("https://api.github.com/users/mr-martinsosa")
.then((response) => {
	let data = response.data

	let img = document.createElement("img")
	let p = document.createElement("p")
	let newButton = document.createElement("button")
	let p2 = document.createElement("p")

	img.src = data["avatar_url"]
	p.innerHTML = "Number of Public Repos: " + data["public_repos"]
	newButton.innerText = "Visit my Github!"
	p2.innerHTML = "Look at my Repos! " + data["repos_url"]

	newButton.addEventListener("click", (event) => {
		window.location = data["html_url"]
	})



	document.body.appendChild(img)
	document.body.appendChild(p)
	document.body.appendChild(newButton)
	document.body.appendChild(p2)
})