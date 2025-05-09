const body = document.querySelector("body")
console.log(body)
// Create the element
const div = document.createElement("div")
// optional -- give it text or style
div.textContent = "This is a Div"
// add it to the page
body.append(div)
div.style.backgroundColor = "blue"

const foodState = [
    {
        name:"strawberries", 
        type:"fruit"
    },
    {
        name:"cheese", 
        type:"dairy"
    },
    {
        name:"bananas", 
        type:"fruit"
    },
    {
        name:"steak", 
        type:"meat"
    },
    {
        name:"apples", 
        type:"fruit"
    },
    {
        name:"shrimp", 
        type:"meat"
    },
    {
        name:"milk", 
        type:"dairy"
    },
    {
        name:"chicken", 
        type:"meat"
    },    
    {
        name:"yogurt", 
        type:"dairy"
    },
]

// creates a single element and appends it to the page
const renderSingle = (arr,foodIndex)=>{
    // const randomNum = Math.round(Math.random()*foodState.length)
    const eachFood = arr[foodIndex]
    console.log(eachFood)
    // create a container
    const parent = document.createElement("div")
    // give a class to the parent
    parent.className = "parent"
    // create a p for the name
    const pName = document.createElement("p")
    // create a p for the type
    const pType = document.createElement("p")
    // give text to both p tags
    pName.textContent = "Name: " + eachFood.name
    pType.textContent = `Type: ${eachFood.type}`
    // add p tags to parent container
    parent.appendChild(pName)
    parent.appendChild(pType)
    // add container to page
    body.append(parent)
}

function renderAll(arr){
    for(let i=0; i<arr.length; i++){ 
    renderSingle(arr, i)
    }   
}

const init = ()=>{
    // call a dataFunction
    renderAll(foodState)
}

init()
foodState.pop()
init()
foodState.pop()
console.log(foodState)



// querySelector
const withQuery = document.querySelector(".demo")
console.log(withQuery)
// querytSleectorAll <--- returns the first item
const withQUerryAll = document.querySelectorAll(".demo")
// getByClassName <--- returns the first item
const withClass =document.getElementsByClassName("demo")
console.log(withQUerryAll, "with QueryAll")
console.log(withClass, "with class")
const classCopy = [...withClass]
console.log(classCopy.map((name)=>name))
// with id
const withId = document.getElementById("unique")
console.log("with id", withId)

// with tag
const withTag = document.getElementsByTagName("div")
console.log("withTag", withTag)

