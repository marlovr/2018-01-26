//statement(s)
console.log("hello world")

// definition
var greeting = "hello"
var person = "zack"

//statement(s)
console.log(greeting, person)
console.log(`${greeting} my name is ${person}`)

console.log('\n----------------\n')

// methods / functions
// a collection of statements
// they are DEFINED but do not run
function printGreeting() {
    console.log(`${greeting} my name is ${person}`)
}

// run the function
// () at the end of a function name means run this function
printGreeting()

console.log('\n----------------\n')

// function that takes parameters
// define parameters withing ( )
function printGreetingVariable(greeting, person) {
    console.log(`${greeting} my name is ${person}`)
}

// run the variable function
// without arguments
printGreetingVariable()
printGreetingVariable("Guten Tag!", "Marlo")

console.log('\n----------------\n')

// collections
// collections are one variable that holds a collection of other variables
var greetings = ["Hello", "Guten Tag!"]
var people = ["Zack", "Marlo"]

// Run the greeting function for multiple people
printGreetingVariable(greetings, people)

// accessing collections
// you access data in a collection by it's index
// index starts at 0
printGreetingVariable(greetings[0], people[0])
printGreetingVariable(greetings[1], people[1])

console.log('\n----------------\n')

// objects
// object is a DATA MODEL
// it contains many pieces of data
// just like a collection using [], objects use {}
// objects have many properties
// console is an object - log is one of it's properties
// console.log - is run the log() function on the console object
var zack = {
    name: 'Zack',
    language: 'German'
}

var marlo = {
    name: 'Marlo',
    language: 'English'
}

console.log(zack)
console.log(marlo)
console.log(zack.name)
console.log(marlo.name)

// function to print the correct greeting
// depending on language the person speaks
function printNativeGreeting(person) {
    if (person.language === 'English') {
        // Hello, Zack!
        //console.log(`Hello, ${person.name}`)
        printGreetingVariable("Hello", person.name)
    } 

    if (person.language === 'German') {
        // Guten Tag, Marlo!
        //console.log(`Guten Tag, ${person.name}`)
        printGreetingVariable("Guten Tag", person.name)
    }
}

console.log('\n----------------\n')

printNativeGreeting(zack)
printNativeGreeting(marlo)