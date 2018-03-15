alert("Welcome to NYCDA, This is your first Javascript!")
var name = "Martin" //avoid
let name = "Sosa" //use let

`A bunch of text
that I normally would
struggle to write over many lines
`

let name = "Martin"
`my name is ${name}`
`my name is ${5+4}`


let listOfFood = [
	"carrots",
	"bacon",
	"milk",
	"parsley"
]

listOfFood[3] //parsley

let ticTacToe = [
	["x", "o", "x"],
	["x", "x", "o"],
	["o", "o", "x"]
]

ticTacToe[1][2] // o (second row, third column)

let classmates = [
	"Jonathan",
	"MD",
	"Rachel",
	"Maria",
	"Chris"
]

classmates[3]


//object literals
let person = {
	firstName: "Orlando",
	lastName: "Caraballo",
	age: 34,
	favoriteMovies: [
		"Intersteller",
		"The Matrix",
		"Eternal Sunshine of a Spotless Mind"
	]
}

person.firstName //Orlando
person["lastName"] //Caraballo
person.favoriteMovies[1] // The Matrix
person["age"] = 24 //age is reset to 24
person["ethnicity"] = "dominican" //adds a new key 'ethnicity' with value 'dominican'
person.favoriteMovies[3] = "Shrek" //lol why does this work

let dude = {
	name: "Martin",
	eyeColor: "black",
	hairColor: "green",

	favoriteMovies: [
		"Scott Pilgrim vs the World",
		"Summer Wars",
		"Shawn of the Dead"
	]
}

dude.eyeColor = brown;
dude.hairColor = blonde;

let movies = {
	topMovieOne: "Scott Pilgrim vs the World",
	topMovieTwo: "Summer Wars",
	topMovieThree: "Shawn of the Dead"
}


`My favorite movies are ${movies.topMovieOne} and ${movies.topMovieTwo}, 
but I really enjoy ${movies.topMovieThree}`

movies["topMovieFour"] = "Scott Pilgrim"

const name = "Martin" //const

let mathOne = 20
let mathTwo = 3
let mathSum = mathOne + mathTwo
let mathProduct = mathOne * mathTwo

console.log(mathSum, mathProduct)

let table = {
	height: "4ft",
	width: "3ft",
	depth: "2ft"
}

for(let dimension in table) {
	console.log(table[dimension] + " ") // 4ft 3ft 2ft
}


for(let i = 10; i > 0; i--){
	console.log("+".repeat(i))
}

let num = 11

if(num < 10){
	alert("Num is less than 10")
}else if(num === 10){
	alert("Num is 10!")
}else{
	alert(num + "was your number and it was greater than 10")
}

let temp = 81
let status = true

if (temp > 80 && status === false{
	console.log("Turn the AC On!")
}else if(temp > 80 && status === true){
	console.log("This thing is broken!")
}else if(temp < 60 && status === true){
	console.log("brrr, turn this thing off")
}else if(temp < 60 && status === false){
	system.log("not worth the electriciy, leave it off.")
}else{
	system.log("I have no idea what to do")
}