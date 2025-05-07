const fruits = ["apples", "bananas", "cherries", "pineapples", "pineapples", "apples", "coconut", "bananas", "apples", "bananas"]

// {apples:3.bananas:3, pineapples:2, coconut:1, cherries:1}
// arr.includes(item) <--- returns a boolean if the item is in the array false if not
// arr.indexOf(item) <--- returns the index if the item is found aand -1 if not

const createObject = (arr)=>{
    // I need to look at each item in the array
    // create an empty object to hold array properties
    const emptyObject = {}
    // build a for loop
    for (let i=0; i<arr.length; i++){
        const eachFruit = arr[i]
        const currentObjectKeys = Object.keys(emptyObject)
        if (currentObjectKeys.includes(eachFruit)){
            emptyObject[eachFruit] ++
        }else{
            emptyObject[eachFruit] = 1
        }
    // inside our for loop we will need to populate an object
    // create a property in teh object for the item in thearray and give ia value of 1
    // if a properties appears more than once instead of creating a new property add 1 to the value already there
    }
    return emptyObject
}


console.log(createObject(fruits))




// Additional Workshop practice
const dinner = {
    cheeseburger:12,
    steak:20,
    soup:8,
    mac:14,
    soupAndSalad:16
}

// for (const key in dinner){
//     console.log(key)
// }
// console.log(Object.values(dinner))

// for (const key in dinner){
//     console.log(dinner[key])
// }
// console.log(Object.values(dinner))

// for (const key in dinner){
//     console.log(dinner[key])
// }

let total = 0
for (const key in dinner){
    total = total + dinner[key]
    console.log(total, dinner[key])
}
console.log(total)

// Alternate method
let forLoopTotal = 0
const arrToLoop = Object.values(dinner)
console.log(arrToLoop)
for (let i=0; i<arrToLoop.length; i++){
    forLoopTotal = forLoopTotal + arrToLoop[i]
    console.log(forLoopTotal, arrToLoop[i])
}
console.log(forLoopTotal)

// Assigning each array item to a constant to more easily conceptualize
// for (let i=0; i<arrToLoop.length; i++){
//     consteachPrice = arrToLoop[i]
//     forLoopTotal = forLoopTotal + eachPrice
//     console.log(forLoopTotal, eachPrice)
// }
// console.log(forLoopTotal)