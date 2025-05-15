const button = document.querySelector("button");
const parentContainer = document.querySelector("#parent")
const keyDiv = document.querySelector("#keyEvent")
const input = document.querySelector("input")

// ==================First example==============
const myCLickEvent = (anything)=>{
    console.log(anything)
    console.log("This is the second way to listen for events!!")
}
// the first parameter is the event you want to listen for
// the second parameter is what we want to happen when the element 'hears' that event
button.addEventListener("click", myCLickEvent)

button.addEventListener("click", myCLickEvent)

for (let i=0; i<10; i++){
    // create an element
    const pTag = document.createElement("p")
    // add text/style/events
    pTag.textContent = "Number " + (Number(i)+1)
    pTag.addEventListener("click", (event)=>{
        // this is the element tha is listening for your event
        const target = event.target
        // this is the content of the target
        const content = target.textContent
        console.log(event.target.textContent)
        alert(`${content} has been clicked`)
    })//mouseenter is how you achieve a hover effect
    // append to the page
    parentContainer.append(pTag)
}


// ==================Second example==============
// button.addEventListener("click", ()=>{
//     const form = document.createElement("form")
//     form.innerHTML = `
//     <label>
//         What's your Name
//         <input/>
//     </label>
//     <button id="submit">Enter</button>
//     `
//     // append
//     parentContainer.append(form)

//     // event listener for submit button
//     form.addEventListener("submit", (e)=>{
//         e.preventDefault()
//         const target = e.target
//         const input = target.querySelector("input")
//         // create
//         const nameHolder = document.createElement("h1")
//         // style/text/event
//         nameHolder.textContent = input.value
//         // append
//         parentContainer.append(nameHolder)
//         form.remove()
//     })
    // i want to create and display a form
    // this form will have an input box for a name
    // and a submit button to submit the form
    // add a submit event listener that will hide the form, and display the users name
// })




// ==================Third example==============
// keyboard events
input.addEventListener("keypress", ()=>{
    keyDiv.textContent = keyDiv.textContent +e.key
    console.log(e.key)
})