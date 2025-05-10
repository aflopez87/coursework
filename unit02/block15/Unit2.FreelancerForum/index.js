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


// 1. Write a function that returns a freelancer object with a randomly generated name, occupation, and rate according to the provided constants.
const getFreelancer = ()=>{
    // creates a random object with the const arrays
    const freelancer = {}
    const randomNameNum = Math.floor(Math.random()*NAMES.length); // selects a random index based on the length of the const array

    const randomName = NAMES[randomNameNum]; // selects a name based on the random number generated in the previous code
    freelancer.name = randomName; // assigns name as the value to a new object key
    
    const randomOccNum = Math.floor(Math.random()*OCCUPATIONS.length);// selects a random index based on the length of the const array
    const randomOcc = OCCUPATIONS[randomOccNum];// selects an occupation based on the random number generated in the previous code
    freelancer.occupation = randomOcc;
    
    const randomPriceNum = Math.floor(Math.random()*(PRICE_RANGE.max-PRICE_RANGE.min+1)+PRICE_RANGE.min);// selects a random index based on the length of the const array
    freelancer.priceRange = randomPriceNum;// assigns the randomly generated number as the value to a new object key
    return freelancer
}
console.log(getFreelancer())

// 2. Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.

function listFreelancers(){
    const freelancerArr = []
    for (let i=0;i<NUM_FREELANCERS;i++){
        const newFreelancer = getFreelancer()
        freelancerArr.push(newFreelancer)     
    }
    return freelancerArr
}
const freeLancerState = listFreelancers()
console.log(freeLancerState)

// 3. Write a function that returns the average rate of all freelancers in state.

