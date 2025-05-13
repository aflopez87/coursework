/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


// create and place the heading "Freelancer Forum" to the body
const heading = document.createElement("h1")
heading.textContent = "Freelancer Forum"
document.body.appendChild(heading)

// create a table element
const freelancerData = document.createElement("table")
// add header to table element
const freelancerHeading = document.createElement("tr")
// create header titles
const headerName = document.createElement("th")
const headerOccupation = document.createElement("th")
const headerRate = document.createElement("th")
// set the names in the header titles
headerName.textContent = "NAME"
headerOccupation.textContent = "OCCUPATION"
headerRate.textContent = "RATE"
// place the header titles
freelancerHeading.appendChild(headerName)
freelancerHeading.appendChild(headerOccupation)
freelancerHeading.appendChild(headerRate)
// place header titles in heading
freelancerData.appendChild(freelancerHeading)
// place within document
document.body.appendChild(freelancerData)

// 1. Write a function that returns a freelancer object with a randomly generated name, occupation, and rate according to the provided constants.
    const getFreelancer = ()=>{
    
    const freelancer = {}// creates a random object with the const arrays
    const randomNameNum = Math.floor(Math.random()*NAMES.length); // selects a random index based on the length of the const array

    const randomName = NAMES[randomNameNum]; // selects a name based on the random number generated in the previous code
    freelancer.name = randomName; // assigns name as the value to a new object key
    
    const randomOccNum = Math.floor(Math.random()*OCCUPATIONS.length);// selects a random index based on the length of the const array
    const randomOcc = OCCUPATIONS[randomOccNum];// selects an occupation based on the random number generated in the previous code
    freelancer.occupation = randomOcc;
    
    const randomPriceNum = Math.floor(Math.random()*(PRICE_RANGE.max-PRICE_RANGE.min+1)+PRICE_RANGE.min);// selects a random index based on the length of the const array
    freelancer.rate = randomPriceNum;// assigns the randomly generated number as the value to a new object key
    return freelancer
}
console.log(getFreelancer())

// 2. Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.

function listFreelancers(){
    // create an empty array
    const freelancerArr = []
    // Iterate through the array
    for (let i=0;i<NUM_FREELANCERS;i++){
        // call the array to get a random freeLancer
        const newFreelancer = getFreelancer()
        // push the new freelancer to the array
        freelancerArr.push(newFreelancer)     
    }
    return freelancerArr
}
// const freelancerState = listFreelancers()
// console.log(freelancerState)

// 3. Write a function that returns the average rate of all freelancers in state.

function priceAvg (priceArr){
    // make sure priceArr is an array
    // create the price summing array and sum freelancer.price for all freelancers
    const sumPrice = priceArr.reduce((total, freelancer)=>total + freelancer.rate, 0);
    // divide sum by array length for average
    return sumPrice/priceArr.length
}
// console.log(priceAvg(freelancerState))

// 4. Use that function to initialize a state variable which will store the average rate of all freelancers.

const averageRangeState = priceAvg(listFreelancers())// calls the function to get the average rate of all freelancers
console.log(averageRangeState)

// 5. Write a component function to represent a single freelancer.

function createFreelancer(freelancer){
    // create elements
    const tableRow = document.createElement("tr")
    const tableName = document.createElement("td")
    const tableOccupation = document.createElement("td")
    const tableRate = document.createElement("td")
    // add text/style
    tableRow.style.border = "1px solid"
    tableRow.style.margin = "5px"
    tableName.textContent = freelancer.name
    tableOccupation.textContent = freelancer.occupation
    tableRate.textContent = freelancer.rate
    // add children to parent
    tableRow.appendChild(tableName)
    tableRow.appendChild(tableOccupation)
    tableRow.appendChild(tableRate)
    freelancerData.appendChild(tableRow)
    return tableRow
}
// call the function to create a single freelancer
const singleFreelancer = createFreelancer(getFreelancer())


// 6. Write a component function to represent an array of freelancers.
function createFreelancers(freelancerArr){
    const freelancerList = freelancerArr.map((freelancer)=>{return createFreelancer(freelancer)})// creates an array of freelancers
    freelancerList.forEach((freelancerObject)=>{
        freelancerData.appendChild(freelancerObject)// places the array of freelancers in the table
    })
    return freelancerList
}   


// 7. Write a component function to represent the average rate of all freelancers.
function createAverageRate(averageRate){
    // create element
    const averageRateText = document.createElement("p")
    // add text/style
    averageRateText.textContent = `The average rate is ${averageRate}`
    return averageRateText
}

// 8. Write and call a render function that will mount the application onto the document.

const renderForum = ()=>{
    // call the function for average rate
    const averageRate = createAverageRate(averageRangeState)
    // place the average rate on the page
    document.body.appendChild(averageRate)
    // create a single freelancer
    const singleFreelancer = createFreelancer(getFreelancer())  
    // place the single freelancer in the table
    freelancerData.appendChild(singleFreelancer)
    // call the function to create an array of freelancers
    const freelancerList = createFreelancers(listFreelancers())
    // place the array of freelancers in the table
    freelancerData.appendChild(freelancerList)
    
}
renderForum()