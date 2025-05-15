// ================== Create the elements ===================
// Create title
const oddsEvents = document.createElement("h1")
// add style/content/
oddsEvents.textContent = "Odds and Events"
// place on page
document.body.append(oddsEvents)

// create a form
const form = document.createElement("form")
// add style/content 
form.innerHTML = `
    <label>
        Add a number to the bank
        <input type="number"/>
    </label>
    <button id="add">Add number</button>
    <button id="sort1">Sort 1</button>
    <button id="sortall">Sort All</button>
    `
// place on page
document.body.append(form)

// Create bank heading and container
const numBank = document.createElement("h2")
const bankDiv = document.createElement("div")
// add style/content
numBank.textContent = "Bank"
// place on page
document.body.append(numBank)
document.body.append(bankDiv)

// Create odds heading and container
const numOdds = document.createElement("h2")
const oddsDiv = document.createElement("div")
// add style/content
numOdds.textContent = "Odds"
// place on page
document.body.append(numOdds)
document.body.append(oddsDiv)

// Create evens heading and container
const numEvens = document.createElement("h2")
const evensDiv = document.createElement("div")
// add style/content
numEvens.textContent = "Evens"
evenDivs.style.border = "1px"
// place on page
document.body.append(numEvens)
document.body.append(evensDiv)

// ================== Add the functions ===================

// take the numbers in the array and apply them into individual children pTags

// clicking the add number button places the value in the bank
const bankArr = []
const addButton = document.querySelector("#add")
addButton.addEventListener("click", (addNum)=>{
    addNum.preventDefault()
    // when we click, take the value of the input and place it in the bank array 
    let bankNum = input
    
    document.createElement("p")
})


// sort the first number of the bank to the Odds or Evens
const oddsArr = []
const sort1Button = document.querySelector("#sort1")
sort1Button.addEventListener("click", (sort1)=>{
    sort1.preventDefault()

})

// sort all of the numbers in the bank to the Odds or Evens
const evensArr = []
addEventListener("click", (sortAll)=>{
    sortAll.preventDefault()
})