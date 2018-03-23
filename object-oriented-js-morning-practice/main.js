function alternate(wordOne, wordTwo){
	let newWord = ""
	for (let i = 0; i < wordOne.length; i++){
		newWord += wordOne[i] + wordTwo[i]
	}
	return newWord
}

let car = {
	brand: "ford",
	wheels: 12,
	colors: "red"
}

class Car{
	constructor(brand, wheels, color){
		this.brand = brand
		this.wheels = wheels
		this.color = color
	}
}

let wizard = {
	universe: "The Lord of The Rings",
	powers: [
		"regeneration",
		"magic staff",
		"fireball"
	],
	age: 106
}

class Wizard{
	constructor(universe, powers, age){
		this.universe = universe
		this.powers = powers
		this.age = age
	}
}

let videoGameLevel{
	levelOfDifficulty: 5,
	isFoggy: true,
	monstersExist: true
}

class VideoGameLevel{
	constructor(levelOfDifficulty, isFoggy, monstersExist){
		this.levelOfDifficulty = levelOfDifficulty
		this.isFoggy = isFoggy
		this.monstersExist = monstersExist
	}
}

class Circle{
	constructor(radius){
		this.radius = radius
	}

	calculateDiameter(){
		return this.radius*2
	}
	calculateCircumference(){
		return this.calculateDiameter() * Math.PI
	}

}

class Rectangle{
	constructor(width, height){
		this.width = width
		this.height = height
	}

	calculateArea(){
		return this.width * this.height
	}
}

class Animal{
	constructor(name){
		this.name = name
	}
	speak(){
		return `${this.name} speaks` 
	}
}

class Dog extends Animal{
	constructor(name, color){
		super(name)
		this.color = color
	}
	speak(){
		return `Woof!`
	}
}