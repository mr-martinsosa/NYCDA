//This comes from data.js
var gifs = window.data.data;
document.addEventListener("DOMContentLoaded", (event) => {	
	let listOfUrls = []
	let drawFrame = document.createElement("img") //create image tag
	let body = document.querySelector("body") //target body
	body.appendChild(drawFrame) //add img tag to body
	drawFrame.setAttribute("class", "box-border") // add class to img
	//drawFrame.src = this.art_url // set img src to url
	for(let i = 0; i < gifs.length; i++){ //loop through and grab urls
		//drawFrame.src = gifs[i].url //grab url and set img src to url
		listOfUrls.push(gifs[i].images.original.url) //move all the urls to an array
	}
	drawFrame.src = listOfUrls[Math.floor(Math.random() * Math.floor(listOfUrls.length) )]
	let shuffleButton = document.querySelector("#shuffle")
	shuffleButton.addEventListener("click", (event) => {
		drawFrame.src = ""
		drawFrame.src = listOfUrls[Math.floor(Math.random() * Math.floor(listOfUrls.length) )] //set src to random image decided by length of array
	})
})

/* bonus */
/* Pop out image used, loop until array is empty then restore array for no repeats*/