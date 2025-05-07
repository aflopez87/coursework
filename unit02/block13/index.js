//                          0                   1                    2
const students = [['Joe', 'Megan', 'April'], [17,16,18], ["math", "english", "math"]]

//write a console that reads Megan is 16 and likes nath using the array above

// break it out by committing each array item to a variable
const nameArray = students[0]
const ageArray = students[1]
const subjectArray = students[2]
console.log(subjectArray)

// One line method
console.log(`${students[0][1]} is ${students[1][1]} and likes ${students[2][0]}`)
