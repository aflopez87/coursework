// Write a programm that gives a time appropriate greeting

const morning = "Good morning!";
const afternoon = "Good afternoon!";   
const evening = "Good evening!";
const night = "Good night!";

// get the time
const date = new Date();
const time = date.getHours();
console.log(date.getHours());
// Choose a greeting based on the time

// ||<-- or
// &&<-- and

// if(time>=5 &&time<=11){
//     console.log(morning);
// }else{
//     console.log(night)
// };

if (time>=5 && time<=11){
    console.log(morning);
}else if (time>=12 && time<=16){
    console.log(afternoon);
}else if (time>=17 && time<=20){
    console.log(evening);
}else{
    console.log(night);
};


function test (){
    console.log("hey");
}

const test2 = () => console.log("hey");

test();
test2();

// this is a parameter
const greeting2 = (username)=> {
    console.log(`Hello ${username}`);
}

// this is an argument
greeting2("Danielle");





function add(numOne, numTwo){
    console.log(numOne+numTwo);
}

add(1, 2);
add(700, 93);
add(54,67);

// Ternary operator
const age = 18;
const isAdult = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(isAdult);

const mood = "happy";
if (mood === "happy"){
    console.log("Horay");
}else {
    console.log("Feel Better");
}

let whatToSay
mood === "happy?" ?  whatToSay = "Hooray" : whatToSay = "Feel Better";
console.log(whatToSay);

let whatToSay2 = mood === "happy?" ? "Hooray" : "Feel Better";
console.log(whatToSay2);