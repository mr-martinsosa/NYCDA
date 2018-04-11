class Zoo{
    constructor(animals){
        this.animals = animals
    }
    addAnimal(animal){
        this.animals.push(animal)
    }
    // eachAnimal(callback){
    //     for(let i = 0; i < this.animals.length; i++){
    //         callback(this.animals[i])
    //     }
    //}

    eachAnimal(callback){
        this.animals.forEach(callback)
    }
    
}

class Dog{
    constructor(name){
        this.name = name
    }
    talk(){
        return `Woof.`
    }
}

class Cat{
    constructor(name){
        this.name = name
    }
    talk(){
        return `Meow.`
    }
}

class AnimalFactory{
    constructor(){

        this.types = {
            dog: {
                talk: function() {return "woof"}
            },
            cat:{
                talk: function() {return "meow"}
            }
        }
    }

    incubate(type, name){
        return{
            name: name,
            talk: this.types[type].talk
        }
    }
}

let fido = new Dog("fido")
let kitty = new Cat("kitty")

let cage = [fido, kitty]

let bronxZoo = new Zoo(cage)

let superDog = new Dog("superdog")

bronxZoo.addAnimal(superDog)

// bronxZoo.eachAnimal(function(index){console.log(index.talk())})
bronxZoo.eachAnimal(animal =>{
    console.log(index.talk()) //duck typing
})