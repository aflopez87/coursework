
// Write a function named convertToCelsius which takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
// The formula for conversion is: celsius = (fahrenheit - 32) * 5/9
const convertToCelsius = (fahrenheit)=>{
     const result = (fahrenheit - 32) * 5/9
     return result
}

// Write a function named describeTemperature which takes a temperature in Fahrenheit and returns a description according to this table:
// Temperature (C) | Description
// < 0 | very cold
// < 20| cold
// < 30| warm
// < 40| hot
// >=40| very hot
function describeTemperature(temperature){
    let description
    if(Math.round(temperature) < 0){
        description = "very cold"
    } else if(Math.round(temperature) < 20){
        description = "cold"
    } else if(Math.round(temperature) < 30){
        description = "warm"
    } else if(Math.round(temperature) < 40){
        description = "hot"
    }else{
        description = "very hot"
    }
    return `The temperature in Celsius is ${Math.round(temperature)}.The temperature would feel ${description}.`;
}


// Prompt the user to provide a temperature in Fahrenheit. Then, alert them with a message that tells them the equivalent temperature in Celsius alongside a description of what that temperature would feel like.
const userInput = prompt("Enter a temperature in Fahrenheit:");

if (isNaN(userInput)){
    alert("Please enter a number!")
}else{
    const convertTemp = convertToCelsius(userInput);
    const response = describeTemperature(convertTemp);
    alert(response);
}