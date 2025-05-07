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