document.addEventListener("DOMContentLoaded", (event) => {
	window.addEventListener("scroll", (event) => {
		let showEverything = document.querySelectorAll(".hidden")
		//let pageTop = window.scrollTop

		// console.log(window.scrollY)
		//let pageBottom = pageTop + window.height
		// if(window.scrollY > 800){
		// 	console.log("yatta")
		// 	console.log(showEverything)
		// }

		//console.log(showEverything)

		// if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
		// 	document.getElementsByTagName("p").className = "show"
		// }
		// if(document.body.scrollTop > 800){
		// 	document.getElementsByTagName("img").className = "show"
		// }

		//loop through, set variable to array[n]
		/* if(window.scrollY > divisibleby800){
			x.classList.add = "showclass"
		}
		*/

		let firstShow = showEverything[0]
		console.log(firstShow)
		let secondShow = showEverything[1]
		let thirdShow = showEverything[2]
		let fourShow = showEverything[3]

		if(window.scrollY > 100){
			firstShow.classList.add("show")
		}
		if(window.scrollY > 800){
			secondShow.classList.add("show")
		}
		if(window.scrollY > 1600){
			thirdShow.classList.add("show")
		}
		if(window.scrollY > 2400){ // too big to show last
			fourShow.classList.add("show")
		}
	})

})


/* --------------- LOOK AT ME ORLANDO -------------------------- */

	// let showEverything = document.querySelectorAll(".hidden")
		// for(let i = 0; i < showEverything.length; i++){
		// 	console.log(showEverything[i])
		// 	console.log(showEverything[i].className = "show")
		// 	if(window.scrollY > 800 ){
		// 		console.log(showEverything[i])
		// 		showEverything[i].classList.add("show")
		// 	}
		// }
/* ------------------------------------------------------------*/