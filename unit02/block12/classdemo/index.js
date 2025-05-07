const student = ["anna", "mark", "lucas", "john", "moses"];

student[2] = "Lucas";
console.log(student);
// console.log(students.pop())
// remove the last item
// console.log(student.pop());
// console.log(student);
// 
// push adds an arguement item to the end
// console.log(student.push("Danielle"));
// console.log(student);


// student.shift();
// console.log(student);
// adds an item to the beginning of the array
// student.unshift("Mary");
// console.log(student);

// slice
// returns a portion of the array without changing the original array
// const subStudent = console.log(student.slice(1,4));
// console.log(subStudent);
// console.log(student);

// splice
// mutates our array by removing a section. has the ability to put items in place of the removed items
// console.log(student.splice(1,2, "Danielle", "Marcus"));
// console.log(student);


// For loops
                //      0           1           2           3           4           5           6
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const colors = ["red", "blue", "green"];
const numbers = [1,2,3,4,5,6,7,8];
for(let i=0; i<daysOfTheWeek.length; i++){
    // console.log(i);
    console.log(`Today is ${daysOfTheWeek[i]}`);
}

// While loops

let cookies = 10;

while (cookies>0){
    console.log(`there are ${cookies} cookies in the cookie jar`)
    cookies= cookies-1
}
console.log("there are no more cookies in the jar")

while(daysOfTheWeek.length>0){
    console.log(`There are ${daysOfTheWeek.length} days left`)
    console.log(daysOfTheWeek)
    daysOfTheWeek.pop();
}

console.log("No more days")