const shoe = {
    brand: "converse",
    hasLaces: true,
    hasVelcro:false,
    color:["green","blue","black"],
    price:50,
    activityType:"walking",
}

// For...in loop for the object
for(const key in shoe){
    console.log(shoe[key])
}

const keys=Object.keys(shoe)
console.log(shoe[keys[4]])
const values = Object.values(shoe)
console.log(values[5])


// console.log(shoe.color)

const colorArray = shoe.color
// console.log(colorArray[1])

// write a function that tells any property of the shoe

function showShoeProp(shoeObject, x){
    console.log(x)
    console.log("color")
    console.log(shoeObject[x])
}

const propertyThatIWant = "brand"

// showShoeProp(shoe, "price")

// showShoeProp(shoe, propertyThatIWant)


const person = {}

person.age = 17
person["faveFood"] = "tacos"
shoe.heel = false
// console.log(person)
person.ae = 19
// console.log(person)
person["age"] = 21
// console.log(person)
delete person.ae
// console.log (person)
