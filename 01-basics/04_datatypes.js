// Primitive data types

// 7 types: string, Number, boolean, null(!0 , empty), undefined, Symbol, BigInt

const score = 100
const scoreValue = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 23453532456546235135345345n


// Reference (non primitive)

// Array, Objects, Functions


const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name:"ayush",
    age:22,
}

const myFunction = function(){
    //console.log("hello");
    
}
//console.log(typeof myFunction);



// ********* memory **************

// Stack(Primitive), Heap(Non-primitive)

let myName = "ayush"

let anotherName = myName
anotherName = "ashu"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "aysuh@go.com",
    upii: "userghghv@hdfc"
}

let userTwo = userOne
userTwo.email = "ayush@google.com"

console.log(userOne.email);
console.log(userTwo.email);




