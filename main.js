// JavaScript source code

//methods
function greeting() {
    window.alert("gm");
    document.getElementById("greeting").innerHTML = "And if I don't catch you gaming";
    console.log("ga, ge, gn gamer");
}

function changeText() {
    //console.log("I'm over the element");

    let para = document.getElementById("new-para")

    if (para) {
        para.remove()
    }
    else {
        let para = document.createElement("p")
        para.id = "new-para"
        let textNode = document.createTextNode(`With ${actor.getFullName()} as ${characters[0]}`)
        para.appendChild(textNode)
        document.getElementById("title-container").appendChild(para)
    }
}

//vars
var title = "The Truman Show"
let director = "Peter Weir"
const releaseYear = 1998

//arrays
const characters = []

//characters.push("Truman Burbank")

characters[0] = "Truman Burbank"

const actor = {}

actor.firstName = "Jim"
actor.lastName = "Carrey"
actor.getFullName = function () {
    return this.firstName + " " + this.lastName
}

const actress = {
    firstName: "Laura",
    lastName: "Linney",
    getFullName() {
        return this.firstName + " " + this.lastName
    }
}

//this will run immediately because it is not waiting for
//a button call or anything
console.log(actor.getFullName())