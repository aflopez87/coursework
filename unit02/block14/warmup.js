//write a function that takes an array of 'user' objects and adds a new property called initials.
//you can assume the objects passed will have a firstName and lastName property.
//the initials property should be the first letter of ther first name and first letter of their last name. 

const sampleUsers = [
    {
        firstName:"Joe",
        lastName:"Doe",
        age:16
    },
    {
        firstName: "Mary",
        lastName: "Smith",
        age:16
    },
    {
        firstName: "Abby",
        lastName: "Gabby",
        age:16
    },
]

// Higher order function solution
const mapInitials = sampleUsers.map((user)=>{
    return{...user, initials:user.firstName[0]+user.lastName[0]}
})
console.log(mapInitials)

// <----------------------------------------------------------------->
// [
//     {
//         firstName: "Joe",
//         lastName: "Doe",
//         initials: "JD"
//     },
//     {
//         firstName: "Mary",
//         lastName: "Smith",
//         initials: "MS"
//     },
//     {
//         firstName: "Abby",
//         lastName: "Gabby"
//         initials: "AG"
//     }
// ]


// const addInitials = (userArr)=>{
//     const newArr = []
//     // forLoop that looks at each item
//     for (let i=0; i<userArr.length; i++){
//         const eachUserObject = userArr[i];
//         const newObject = {...userArr[i]};
//         newObject.initials = eachUserObject.firstName[0]+eachUserObject.lastName[0];
//         newArr.push(newObject)
//     // inside my for loop i want to create a new object and spread in what was already there. Then I'll add a new property.
//     // push the new object into our array
//     }
    

//     return newArr
// }

// //function call
// console.log(addInitials(sampleUsers));

// const numArr = [1,2,3,4,5,6,7];
// console.log(...numArr);

// const someFunction=()=>{}

// const HOF = (someFunction)=>{//HOF is higher order function
// }
// <----------------------------------------------------------------->