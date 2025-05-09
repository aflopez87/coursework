const foods = [
    {
        name:"strawberries", 
        type:"fruit"
    },
    {
        name:"cheese", 
        type:"dairy"
    },
    {
        name:"bananas", 
        type:"fruit"
    },
    {
        name:"steak", 
        type:"meat"
    },
    {
        name:"apples", 
        type:"fruit"
    },
    {
        name:"shrimp", 
        type:"meat"
    },
    {
        name:"milk", 
        type:"dairy"
    },
    {
        name:"chicken", 
        type:"meat"
    },    
    {
        name:"yogurt", 
        type:"dairy"
    },
]

//write code that prints just the names of only the fruits to the console.

// My attempt
// function onlyFruit(food, type){
//     const filterFoods = food.filter(foodMatch => foodMatch.type === type);
//     return filterFoods.name;
// }
// console.log (onlyFruit(foods, fruit))

//<________________________Solution__________________________________________>//
// const justTheFruits = foods.filter((foodItem)=>{
//     return foodItem.type==="fruit"
// })
// // console.log("the filtered array", justTheFruits)

// const justTheNames = justTheFruits.map((fruit)=>{return fruit.name})
// console.log(justTheNames)

const justTheFruitNames = foods.filter((foodItem)=>{return foodItem.type==="fruit"}).map((fruitObjects)=>{return fruitObjects.name});
console.log(justTheFruitNames)