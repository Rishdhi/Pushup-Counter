// FUNCTION MAIN INCREMENT TASK (PASSENGER COUNTER)


// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count



let personcounter = 0
let countEl = document.getElementById("count-el")

function increment() {
    personcounter += 1

    countEl.innerText = personcounter

    // if(personcounter == 5) {
    //     alert("This is starting to get better 👩‍🦰👌")
    // }

    // else if(personcounter == 10) {
    //     document.getElementById
    //     ('children-yelling-yeeeeah-sound').play()
    //     alert("This is a partyyyyy 👏🥳")
    // }

}



const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', function() {
  location.reload();
});



function incrementby4() {
    personcounter += 4
    document.getElementById("count-el").innerText = personcounter;

    // document.getElementById
    // ('Cricket-shot').play()

    if(personcounter == 4) {
        alert("That's a fouuuuurrrrr 👩‍🦰👌")
    }

    else if(personcounter > 10 && personcounter < 15) {
        alert("This is a partyyyyy 👏🥳")
    }

}







function incrementby6() {
    personcounter += 6
    document.getElementById("count-el").innerText = personcounter;
    // the above line is to pass in arguments or pass in data
    // to work with

    // document.getElementById
    // ('Hitting-six').play()

    if(personcounter == 6) {
        alert("That's a sixxxxxx 👩‍🦰👌")
    }

    else if(personcounter > 10 && personcounter < 15) {
        document.getElementById
        ('children-yelling-yeeeeah-sound').play()
        alert("This is a partyyyyy 👏🥳")
    }

}



// green save button
//previous entries

function save() {
    let numberOfEntries = personcounter + " - "
    // the - hyphen character is not a readable format for 
    // inner.text
    // and the numbers will not have space before new numbers
    // However instead of inner.text use textContent
    let saveEl = document.getElementById("save-el")

    //saveEl.innerText += numberOfEntries

    saveEl.textContent += numberOfEntries

    // let peopleEntered = document.getElementById("count-el")

    // peopleEntered.innerText = 0

    countEl.textContent = 0
    personcounter = 0

}









// FUNCTION MAIN INCREMENT TASK (PASSENGER COUNTER)









//document.getElementById("count-el").innerText = 5;

//  you store data you need a variable to store it in

//console.log can be run from google chrome developer tools
// by inspect element, then console and type this and hit enter


// *************************  ****************************
// *************************  ****************************
// *************************  ****************************
// *************************  ****************************
// ************************* Notes ****************************
// *************************  ****************************
// *************************  ****************************
// *************************  ****************************
// *************************  ****************************
// *************************  ****************************



let count = 0

console.log(count)  // this will output 0


let myAge = 24

console.log(myAge)  // this will output 24


let multiply = 6 * 4

console.log(multiply) // this will output 24


let firstBatch = 5
let secondBatch = 15

let countofbatch = firstBatch + secondBatch

console.log(countofbatch)




let mynewAge = 24
let humanDogRatio = 7

myDogAge = mynewAge * humanDogRatio

console.log(myDogAge)



let gamingCount = 50
gamingCount = gamingCount + 50

console.log(gamingCount)   // output is 100

gamingCount = gamingCount - 75

console.log(gamingCount)   // output is 25

gamingCount = gamingCount + 45

console.log(gamingCount)   // output is 70







// reusable functions

function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

//setting up the race

countdown() // the created function can be called

// Go!
// players are running the race
// race is finished

//begin second race
countdown() // the created function can be called




// function tasks below


// function task 1

function numberspitter() {
    console.log(42)
}

numberspitter()


// function task 1







// function task 2

//create a function that logs out the sum of all the lap times

let lap1 = 34
let lap2 = 33
let lap3 = 36


// Method 1

function totaloflap() {
    let lap1 = 34
    let lap2 = 33
    let lap3 = 36
    
    let total = lap1 + lap2 + lap3
    console.log(total)
}

// Method 1

totaloflap()

// Method 2


function totaloflap2() {
    let lap4 = 34
    let lap5 = 33
    let lap6 = 36

    console.log(lap4 + lap5 + lap6)
}

totaloflap2()

// Method 2


// function task 2












// FUNCTION TASK 3

// create a function that increments the lapsCompleted variable
// with one
// run it three times

let lapsCompleted = 0

function lapincrementor() {
    lapsCompleted = lapsCompleted + 1
}

lapincrementor()

console.log(lapsCompleted)

//output is 3

 
// FUNCTION TASK 3






// STRINGS


let username = "Rishdhi"
// console.log(username)


let message = "You have three new notifications"
//concatinating below
console.log(message + ", " + username + "!")



let messageToUser = message + ", " + username + "!"
console.log(messageToUser)



let name = "Rishdhi"

let greeting = "Hi, my name is "

let myGreeting = greeting + name + "!"

console.log(myGreeting)




// NUMBERS AND STRINGS

console.log(4 + 5) // the output will be 9
console.log("2" + "4") // the output will be 24
console.log("5" + 1) // the output will be 51
console.log(100 + "100") // the output will be 100100

// when there is a string against a number string always wins
// a string is always within double or single quotes

// NUMBERS AND STRINGS




// *************************  ****************************
// *************************  ****************************
// *************************  ****************************
// *************************  ****************************
// ************************* Notes ****************************
// *************************  ****************************
// *************************  ****************************
// *************************  ****************************
// *************************  ****************************
// *************************  ****************************












// *************************  ****************************
// *************************  ****************************
// *************************  ****************************
// *************************  ****************************
// ************************* WELCOME BACK APP ****************************
// *************************  ****************************
// *************************  ****************************
// *************************  ****************************
// *************************  ****************************
// *************************  ****************************





//camelCase this is the way to name variables

 let welcomeEl = document.getElementById("welcome-el")

 let myName = "Rishdhi"

 let welcomeGreeting = "Welcome back, "

 let welcomeMessage = welcomeGreeting + myName 

 welcomeEl.innerText = welcomeMessage


// instead of welcomeEl.innerText = welcomeEl.innerText + " 😃"
//below code can be used
//welcomeEl.innerText plus equal assings it to the other side
// and then adds the emoji to it
 welcomeEl.innerText += " 😃"



// WELCOME BACK APP
