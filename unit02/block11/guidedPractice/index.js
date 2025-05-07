// Write a function that converts yards ot meters
// declare a function call it convertYardsToMeters
// function should have a parameter, because the function needs yards to run
// Inside the function I need to...do the math to convert yards to meters
// return the result of that math
const convertToMeters = (yards) =>{
    const result = yards*0.9144;
    return result;
}
// const convertedDis = convertToMeters(17)
console.log(convertToMeters(17));
// write a function that describes the distance 
// declare a function call it describeDistance
// this should take a parameter that is the number of yards the user entered converted to meters
// lets figure out how to use the function we already wrote as a parameter
// before if statement define a let variable that will changed based on if statement
// inside the function write if else statement that sets a variable to one of the strings below
// after description variable is defined return it from the function

function describeDistance(distInMeters){
    let description
    if(Math.round(distInMeters)>1000){
        description = "kilometer"
    }else if(Math.round*(distInMeters)>100){
        description = "hectometer"
    }else if(Math.round*(distInMeters)>10){
        description = "decameter"
    }else{
        description = "sandwich"
    }
    return `it's longer than a ${description}`;
}

// console.log(describeDistance(convertedDis));
// prompt the user for a number of meters
const userInput = prompt("Enter a number of yards:");
if(typeof userInput !== "number"){
    alert("Please enter a number")
}else{
    const convertedDis = convertToMeters(userInput);
    const finalAnswer = describeDistance(convertedDis);
    alert(finalAnswer);
}

// If the distance is greater than 1000, it's longer than a kilometer
// If the distance is greater than 100, it's longer than a hectometer
// If the distance is greater than 10, it's longer than a decameter
// Else, the distance is longer than a sandwich