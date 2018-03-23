class Classic{
	constructor(frame, art_url = 
		"https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"){
		this.frame = frame
		this.art_url = art_url
	}

	render(){
		let drawFrame = document.createElement("img") //create image tag
		drawFrame.src = this.art_url // set img src to url
		let body = document.querySelector("body") //target body
		body.appendChild(drawFrame) //add img tag to body
		drawFrame.setAttribute("class", `${this.frame}`) // add class to img
		
		// drawFrame.setAttribute("class", `${this.frame}`) //append class to img tag
		// drawFrame.querySelector(`${this.frame}`).src = this.art_url //append img src to picture
		// drawFrame.innerHTML += `class="${this.frame}" src=${this.art_url}`
	}
}

class Meme extends Classic{

}

class Gallery{
	constructor(imageList = []){
		this.imageList = imageList
	}

	add(image){
		this.imageList.push(image)
	}

	renderAll(){
		for(let i = 0; i < this.imageList.length; i++){
			let drawFrame = document.createElement("img") //create image tag
			drawFrame.src = this.imageList[i].art_url // set img src to url
			let body = document.querySelector("body") //target body
			body.appendChild(drawFrame) //add img tag to body
			drawFrame.setAttribute("class", `${this.imageList[i].frame}`) // add class to img
		}
	}
}

let classicPic = new Classic("black-border", "http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg")
let memePic = new Meme("red-border","http://i0.kym-cdn.com/entries/icons/original/000/022/940/spongebobicon.jpg")
let galleryPics = new Gallery()
galleryPics.add(classicPic)
galleryPics.add(memePic)

classicPic.render()
memePic.render()
galleryPics.renderAll()