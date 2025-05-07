const arr = [1,2,3,4]

console.log(arr.find((num)=>num===7))




const sampleUsers = [
    {
        firstName: "Joe",
        lastName: "Doe"
    },
    {
        firstName: "Mary",
        lastName: "Smith"
    },
    {
        firstName: "Abby",
        lastName: "Gabby"
    },
    {
        firstName: "Timothy",
        lastName: "LastName"
    },
    {
        firstName: "Timothy",
        lastName: "Adams"
    }
]

console.log(sampleUsers.find((user)=> {
    user.firstName === "Timothy"}))

// console.log(foundUser)

// filter