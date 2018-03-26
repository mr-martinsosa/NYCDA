class Child{
	constructor(firstName, lastName, age){
		this.firstName = firstname
		this.lastName = lastName
		this.age = age
	}
}

class Daycare{
	constructor(children = []){
		this.children = children
		//this.children = []
	}

	add(child){
		this.children.push(child)
	}
}

let martin = new Child("martin", "sosa", 42)
let dayCare = new Daycare()

dayCare.add(martin)
