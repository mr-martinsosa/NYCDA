//3. Translate this Ruby code into Javascript:
class Joke {

    constructor(name, content) {
        this.name = name
        this.content = content
    }

    tell {
        return this.content
    }
}

class GoodJoke < Joke {
    initialize(name, content) {
        this.funny = true
        super(name, content)
    }
}

class BadJoke < Joke {
    initialize(name, content) {
        this.funny = false
        super(name, content)
    }
}

bad_joke = BadJoke.new("knock knock", "knock, knock...")
good_joke = GoodJoke.new("question", "what are those!?")

console.log(good_joke.tell)
console.log(bad_joke.tell)

//5. Label the following code into keywords, symbols and names that are defined by a
//developer in the following code:

function loopBackwardsAndConsoleLog(array) {
    for (let i = array.length - 1; i >= 0; ++i) {
        console.log(array[i])
    }
}

//function declaration, argument, for loop, log to the console, arrays and counters

//7. Is the following code correct? Why?

function namePlusTen() {
    return name + 10
}

name = "orlando"
namePlusTen()

//Yes, it outputs the string "orlando" with the number 10 after it. It works because its concatinating
//both as a string and combining them.

//9b. What code would I write to allow someone to swap a value from one 
//location on the list to another location on the list?

function swapValue(array, valueOne, valueTwo) {
    holdValue = ""
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valueOne) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] === valueTwo) {
                    holdValue = array[i]
                    array[i] = array[j]
                    array[j] = holdValue
                }
            }
        }
        if (array[i] === valueTwo) {
            for (let j = 0; j < array.length; j++) {
                if (array[j] === valueOne) {
                    holdValue = array[i]
                    array[i] = array[j]
                    array[j] = holdValue
                }
            }
        }
    }
    return array
}

array = [
    "That's what she said",
    "Minhal is amused...",
    "When would you use this?",
    "I am the html5 master!",
    "Third eye open",
    "[Whistle] Look at dat sauce",
    "This death wish coffee is all for me... Mwahaha!"
]

swapValue(array, "When would you use this?", "Third eye open")

//10. Given the list on number 9, assign each comment / phrase to the person it best fits. 
//If you had to describe this relationship in javascript and ruby code, how would you write it?

class Student {
    constructor(name, quote) {
        this.name = name
        this.quote = quote
    }
}

rashid = new Student("rashid", array[0])
minhal = new Student("minhal", array[1])
rachel = new Student("rachel", array[2])
aaron = new Student("aaron", array[3])
michael = new Student("michael", array[4])
jonathan = new Student("jonathan", array[5])
martin = new Student("martin", array[6])

//you can use a class structure in javascript to have student objects with name and quote.