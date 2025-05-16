//look up javascript's setTimeOut and setInterval functions
//use SetTimeOut to write a function that console.logs 'Hello' after five seconds

// function hello(){
//     console.log("Hello World")
// }

// setTimeout(hello(), 5000)

// console.log(1)
// console.log(2)
// alert(3)
// console.log(4)
// console.log(5)

// const sampleFetch = ()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(['apples', 'bananas', 'cherries'])
//         }, 75)
//     })    
// }


// const getData=()=>{
// const data = sampleFetch()
// console.log(data)
// }
// console.log("here", getData())



// ===================== Demo Try/Catch ==================================
// const adder = ()=>{
    
//     try{
//         const numOne = prompt("Give me a number")
//         const numTwo = prompt("Give me a another number")    
//         if (Number(numOne)&& Number(numTwo)){
//             alert(numOne+numTwo)
//         }else{
//             throw new Error("One of these is not a number!")
//         }
//     }catch(err){
//         alert(err.message)
//     }finally{
//         console.log("That is a try catch block!")
//     } 
// }
// adder()




const fetchPokemon = async ()=>{
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await response.json()
        const pokemon = data.results
        console.log(pokemon[18])
    }catch{
        console.error(err.message)
    }
    
}
fetchPokemon()