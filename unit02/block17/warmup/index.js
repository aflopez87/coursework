// warmup: display all of Mandy's information in the browser
const mandy = {
    name: "mandy",
    species: "ostrich",
    img:"https://images.unsplash.com/photo-1694083440605-975656362106?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
// created or pulled elements from the document
const body = document.getElementsByTagName("body")[0]
const h5 = document.createElement("h5")
const p = document.createElement("p")
const img = document.createElement("img")
// give it content or style
h5.innerText = mandy.name
p.innerText = mandy.species
img.src = mandy.img
img.alt = mandy.species
// append it to the body
body.appendChild(h5)
body.appendChild(p)
body.appendChild(img)
// add a class to the h5
h5.classList.add("mandy-name")
// add a class to the p
p.classList.add("mandy-species")
// add a class to the img
img.classList.add("mandy-img")
// add a class to the body
body.classList.add("mandy-body")


//Practice on your own...after class
//go back to your original creation of Mandy, display the breed as a button that says "Name this animal".
//add a click event that opens a form with a text box and a submit button
//add another click event to the submit button that checks if the user text is equal to the species of the animal.
//if the values are equal change the button text to the name of the species, if it is incorrect, change the button text to try again.
//don't forget to add logic to the submit event that gets rid of the form that pooped up!
//extra extra practice (but not really...)
//create an array of animals like Mandy, give each one a name, a species, and an image from unsplash(or whereever you want)
//display them all!
//publish your site with netflify and have your friend play your new game!