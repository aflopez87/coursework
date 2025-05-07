const numSample = [17,37,1,79,23,8,67,14,66];
const num = 2
const sampleStrings = ["Hello", "I'm happy!", "How are you?", "Are you leaving?", "Every", "Taco"]

// _____________________________________________________________________________________________
//write a function that takes an array of numbers and a number and returns all of the numbers in the array multiplied by the given number
//readLinSync <user input from the terminal


function multiplyArray (arrOfNums, num){
    //look at each number in the arrOfNums
    //build a for loop
        const newArray = []

    for(let i =0;i<arrOfNums.length;i++){
        //inside our for loop multiply arrOfNums[i] * num
        const calculation = arrOfNums[i] * num;
        newArray.push(calculation);
        //newArray.push(arrOfNums[i] * num)
        //after we get the calculation, save it to a new array
    }
    return newArray
    //outside of our for loop return the new array
}
// console.log(multiplyArray(numSample, 10));

// _____________________________________________________________________________________________
const obj ={}
const sampleCarts = [
    {
        item1:99,
        item2:3,
        item3:27
    },
    {
        item1:45,
        item2:37,
        item3:2
    },
    {
        item1:990,
        item2:38,
        item3:7
    },
    {
        item1:9,
        item2:55,
        item3:270
    }
]

//write a function that takes an array of 'cart objects' add the prices of all the items in each object and add a new total property set equal to the calculation
const addTotal = (arrOfCarts)=>{
    //const total = it would only reset after the function is finished running
    for(let i = 0; i<arrOfCarts.length;i++){
        let total =0
        const eachCart = arrOfCarts[i]
        for(const item in eachCart){
            const eachPrice = eachCart[item]
            total = total + eachPrice 
        }
        eachCart.totalSum = total
        //inside my for loop I will use a for in loop(?) to add all the prices in my object
        //create a new property on the object (= arrofCarts[i]) and set it equal to the calcluation
    }
    return arrOfCarts
    //builds a for loop to look at each cart object in the arrOfCarts
    //return the original arrOfCarts after it's been manipulated
}
// console.log(addTotal(sampleCarts))

// _____________________________________________________________________________________________

//write a function that takes an array of strings and remove all the strings that start with vowels
const removeVowels = (arrOfStrings)=>{
    //create an array of vowels to compare the first letter of each string to
    const vowelArr = ['a','e','i','o','u']    
    //create an array to hold the strings that do not start with vowels
    const noVowelStrings = []
    //build a for loop to look at each string in the arrOfStrings
    for(let i=0;i<arrOfStrings.length;i++){
        //inside the for loop we will look at the first letter of each string and compare it to the vowel array
        const eachString = arrOfStrings[i]
        // This makes the first letter of each string lowercase so we can compare it to the vowel array
        const firstLetter = eachString[0].toLowerCase()
        //if the first letter is not in the vowel array we will push it into the noVowelStrings array
        if(!vowelArr.includes(firstLetter)){
            noVowelStrings.push(eachString)
        }
    }
    //outside of our for loop return the noVowelStrings array
    return noVowelStrings
}
console.log(removeVowels(sampleStrings))

// _____________________________________________________________________________________________
//write a function that takes an array of 'user' objects. return only the objects with an age property greater than 18
function ofAge(arrOfUsers){
    //create an array to hold of age users
    const ofAgeUsers = []
    for(let i=0;i<arrOfUsers.length;i++){
        //inside the for loop we will compare the age of each user to the number 18
        //if their age is greater than 18 we will push them into of age users array
        const eachUser = arrOfUsers[i]
        const eachAge = eachUser.age
        if(eachAge<18){
            ofAgeUsers.push(eachUser)
        }
       // console.log(ofAgeUsers)
    }
    //build a for loop that looks at each user
    return ofAgeUsers
    //outside of our for loop return the ofAge array

}
//console.log(ofAge(sampleUsers))
// const numSample = [17,37,1,79,23,8,67,14,66]

// _____________________________________________________________________________________________

//write a function that takes an array of numbers and a number and finds the number that was given in the array of numbers
function locateNumber (arrOfNums,num){
    //create a variable to a true or false, true if the num is found, false if not
    let foundNum = false
    //build a for loop
    for(let i=0;i<arrOfNums.length;i++){
        const eachNum = arrOfNums[i]
        if(eachNum === num){
            foundNum = true
            break
            //continue stops the current loop
        }else{
            foundNum = false
        }
        //inside of our foor loop we will look at each number and see if it is equal to the number given
        //if it is we will save it to a variable
    }
  
    //outside of our for loop return the number if variable is true, return "we couldn't find your number if variable is false"
     return foundNum ? num : 'We did not find your number!'
}
// console.log(locateNumber(numSample, 600))

// _____________________________________________________________________________________________
//write a function that takes an array of 'cart' objects. return only the objects with an total less than 100 dollars
const sampleCartArr = [
    {
        item1:99,
        item2:3,
        item3:27
    },
    {
        item1:45,
        item2:37,
        item3:2
    },
    {
        item1:990,
        item2:38,
        item3:7
    },
    {
        item1:9,
        item2:55,
        item3:270
    }
]
// create a function that takes the array of objects sampleCartArr and returns only objects with a total less than 100
const returnLessThan = (cartArr)=>{
    // create an array to hold the carts with totals less than 100
    const cartsLessThan = []
    // build a for loop to iterate throught the arrays as they are summed up
    for (let i=0; i<cartArr.length;i++){
        // create a variable to hold the total of each cart
        let total =0
        const eachCart = cartArr[i]
        // create a for in loop to iterate through the items in each cart
        // inside the for in loop we will add the prices of each item in the cart to the total variable
        for(const item in eachCart){
            const eachPrice = eachCart[item]
            total += eachPrice
        }
        eachCart.totalSum = total
        // if the total is less than 100 we will push it into the cartsLessThan array
        if(total<100){
            cartsLessThan.push(eachCart)
        }
    }   
    // outside of the for loop return the cartsLessThan array
    return cartsLessThan
}
console.log(returnLessThan(sampleCartArr))

// const returnLessThan = (cartArr)=>{
//     // create an array to hold the carts with totals less than 100
//     const carstLessThan = []
//     // build a for loop to iterate throught the arrays as they are summed up
//     for (let i=0; i<cartArr.length;i++){
//         let total =0
//         const eachCart = arrOfCarts[i]
//         for(const item in eachCart){
//             const eachPrice = eachCart[item]
//             total += eachPrice 
//         }
//         eachCart.totalSum = total
//     }

// }
// _____________________________________________________________________________________________
//write a function that takes an array of 'user' objects. return a string with all of the users names i.e 'the users are...'
const sampleUsers1 = [
    {
        name:"Joe",
        age:13
    },
    {
        name:"Amy",
        age:31
    },
    {
        name:"Meg",
        age:27
    },
    {
        name:"Josh",
        age:1
    },
    {
        name:"Adam",
        age:8
    }
]
const idUsers = (arrOfUsers)=>{
    //create an string set equal to the users are
    let str = 'The users are: '
    //build a for loop 
    for(let i =0;i<arrOfUsers.length;i++){
    //inside our for loop we will pull out the users name property
    const eachUser = arrOfUsers[i]
    const eachName = eachUser.name
    //user = arrofUsers[i]
    //add it to a string variable
    //str = `${str} ${eachName}`
        str = str +" "+ eachName
        console.log(str)
    }
    console.log(str)
    //outside of our for loop return the string
}

idUsers(sampleUsers1)


// _____________________________________________________________________________________________
//write a function that takes an array of 'user' objects. return an array with all the users names
const sampleUsers = [
    {
        name:"Joe",
        age:13
    },
    {
        name:"Amy",
        age:31
    },
    {
        name:"Meg",
        age:27
    },
    {
        name:"Josh",
        age:1
    },
    {
        name:"Adam",
        age:8
    }
]

const assignId = (user, id)=>{
    user.id = id
    return user
}

//console.log(assignId(sampleUsers[0],1))

// _____________________________________________________________________________________________

//write a function that takes a single 'user' object and adds an id.
const sampleUserArr1 = [
    {name: "Anthony",
    age: 29}
]
let userId = 0
const idUser=(userObj)=>{
    //create a variable to hold the id
    userObj.id = ++userId
  
    return userObj
}
console.log(idUser(sampleUserArr1[0]))
    

// _____________________________________________________________________________________________

//write a for loop that applies the function to each object in an array of 'user' objects. 
for(let i=0;i<sampleUsers.length;i++){
    const eachUser = sampleUsers[i]
    assignId(eachUser, i+1)
}
console.log(sampleUsers)



//bizzbuzz
//Write a function that takes number n. print (return or console, whichever is easier) numbers 0-n, if the number is a multiple of 3, print bizz, if its a multiple of 5 print buzz, if its a multiple of both 3 and 5, print bizzbuzz, otherwise print the number. 
//const bizzbuzz = (n)=>{}

//write a function that takes a number and returns true if the number is prime and false if it is not
//const prime = (num)=>{}
//SUPER CHALLENGE
//write a function that takes a camel case string and makes it a regular string ie ThisIsNotCamelCase ---> This is not camel case.
//const camelCase=(string)=>{}