//bring in containers and or body from HTML to append element to later on. 

//two state variables
//one to hold all of the puppies
//one to hold a singlePuppy 

//optional API_URL variable

//API functions

//READ/GET ALL this is an async function
//inside the function
//try catch block
//in the try block...
//use fetch(API_URL) to get a response from the API
//turn that data that is JSON into javascript
//grab the data if necessary
//forEach over the data from the API and push it into the state array. 
//console.log(state array to ensure the puppies from the API have been set)
//rerender()
//catch(error){
//console.log(error.message)
//}


//READ/GET ONE async function(id)
//inside the function
//try catch block
//in the try block...
//use fetch(API_URL+ id) to get a response from the API
//turn that data that is JSON into javascript
//grab the data if necessary
//set the object to our stateVariable. e.g singlePuppy = response.data
//console.log(state object to ensure the puppy from the API have been set)
//rerenderSinglePuppy()
//catch(error){
//console.log(error.message)
//}

//Create/POST one this is an async function(entireObject)
//inside the function
//try catch block
//in the try block...
//use fetch(API_URL,{
// method :"POST",
// headers:{Content:"application/json"},
//body: JSon.strigify(entireObject)
// }) to get a response from the API
//turn that data that is JSON into javascript
//grab the data if necessary
//stateArray.push(newDataFromTheAPI)
//rerender()
//console.log(state array to ensure the puppies from the API have been set)
//catch(error){
//console.log(error.message)
//}


//DELETE/DELETE one this is an async function(id)
//inside the function
//try catch block
//in the try block...
//use fetch(API_URL+id,{
// method :"DELETE"
// }) to get a response from the API
//turn that data that is JSON into javascript
//grab the data if necessary
//let index = stateArray.findIndex to find the index
//stateArray.splice(index,1)
//rerender()
//console.log(state array to ensure the puppies from the API have been set)
//catch(error){
//console.log(error.message)
//}


//UI Functions

//renderSingleFunction(puppy){
//create a puppyContainer to hold all the elements I need
//create Elements for each propety we want to display (1 ptag and an image)
//variablename.textContent = puppy.name
//variableName.innerHtml = `<p>${puppy.breed}</p>`
//if you use textContent don't forget to append to the parrent Element!
//create a button that you can click to view more details
//add an event listener to this button
//the event listener should trigger your getONE
//buttonName.addEventListener("click", (e)=>{
// getOneFunction(puppy.id)

//})
//return the puppyHolder after it's all built
//}

//render All Puppies(){
// create a varibale and set it equal to stateArray.map((puppy)=>the functionToCreateASinglePuppy(puppy))
// //whatEverYouCalledPuppyListHolder.replaceChildren(...variableYouCreatedOnTheLastLine)
// }

//renderSelected(){
//if(selectedPuppy){
//const singlePuppy = renderSingleFunction(stateObject)
// const breed = document.createElement("p")
// breed.textContent = statepuppy.Breed
// singlePuppy.append(breed)
// also make and append a delete button, cohort id, any other extra details
//pregram deleteButton JUST LIKE VIEW Button
// append to the singlePuppyHolder that you pulled in from the HTML
//}else{
// singlePuppy.textContent = "Please Select  puppy!"
//}
// }//

//a function to make the form
//create HTML 'form' tag with a document.createElement
//dont forget labels
//ineer.HTML to create all the inputs for the form (you need at least the name and breed which will both be type='text')
//dont forget to give you inputs names so we can pull the data off for the submitEvent
//create submit button
//submit button.addEventListen("click",()=>{
// const newData = {
//name:form.name.value
//breed:form.breed.value
//}
// addOneFunction(newData)
// 
// 
 //   
//})


//init function async function
//inside
//await whatever you call get All puppy function
//render function()
//renderSelected()
//formRender()

//init()



//a way to close the selected view besides deleting the player
//DONT FORGET CSS