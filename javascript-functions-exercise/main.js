function nycdaWelcome(name){
	return `Welcome to NYCDA ${name}! Enjoy your stay!`
}

nycdaWelcome("Martin")

function brokenCalculator(num1, num2){
	return num2 * 3
}

brokenCalculator(2, 22)

function lineThemUp(num1, num2, num3){
	let numArr = [num1, num2, num3]
	return numArr
	//return [num1, num2, num3]
}


lineThemUp(2, 22, 222)

function majesty(name){
	return `Majesty ${name}`
}

function royalizer(gender, name){
	if(gender === "male"){
		return `His ${majesty(name)}`
	}else if(gender === "female"){
		return `Her ${majesty(name)}`
}

royalizer("male", "Martin")
royalizer("female", "Marissa")

// function youHaveWon(){
// 	return `You have won a: `
// }

// function magicDoor(input){
// 	if(input === "1"){
// 		return (youHaveWon() + ` a brand new car!`)
// 	}else if(input === "2"){
// 		return (youHaveWon() + ` a NYCDA t-shirt!`)
// 	}else{
// 		return (youHaveWon() + ` a blackhole to Antarctica :)`)
// 	}

// }

function chooseDoor(input) {
  let output = ""
  
  if(input === 1) {
    output += " brand new car"
  } else if(input === 2) {
    output += " NYCDA"
  } else {
    output += " something about space"
  }
  
  return output
}

function magicDoor(input){
	let prefix = `You get a `

	return prefix + chooseDoor(input)
}

magicDoor(1)