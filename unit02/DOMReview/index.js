const body = document.querySelector("body")
const groceryList = document. createElement("div")
const heading = document. createElement("h1")
heading.textContent ="Shopping List"
body.append(heading, groceryList)
let  groceryArray= [
    {
        purchased:true,
        quantity:0,
        category:"pantry",
        itemName:"crackers",
        id:0
    },   
    {
        purchased:false,
        quantity:0,
        category:"pantry",
        itemName:"chips",
        id:1
    },   
    {
        purchased:false,
        quantity:0,
        category:"pantry",
        itemName:"noodles",
        id:2
    },   
    {
        purchased:false,
        quantity:0,
        category:"fridge",
        itemName:"yogurt",
        id:3
    },   
    {
        purchased:true,
        quantity:0,
        category:"fridge",
        itemName:"tomatoes",
        id:4
    }
]

// groceryItem =   {
//     purchased:boolean,<---not needed on my form automatically set as false
//     quantity:number,<--input tye number
//     category:"string", <--input type text
//     itemName:"string",<--input type text
//     id:number<--not needed on the form
// }
//HTTP Method - CRUD -- what it does
//     POST   - Create --  add new data<--form
const addData = (newData)=>{
    groceryArray.push(newData)
    renderAll()
}

//     GET    - Read --display current data on the page

//     PUT    - Update -- update current data
const updateData = (updatedData)=>{
    const index = groceryArray.findIndex((grocery)=>{return grocery.id===updatedData.id})
    groceryArray.splice(index,1, updatedData)
    renderAll()
}


//     DELETE - Delete -- remove current data
const deleteData = (dataToDelete)=>{
    const index = groceryArray.findIndex((grocery)=>{return grocery.id===dataToDelete.id})
    groceryArray.splice(index,1)
    renderAll()
}

const createForm = ()=>{
    const form = document.createElement("form")
    form.innerHTML = `
    <h3>Enter Groceries</h3>
    <label for = "name">Grocery name</label>
    <input name= "name"/>
    <label for = "qnty">How many do you need?</label>
    <input name= "qnty" type = 'number'/>
    <button>Add Grocery</button>
    `
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        const newData = {
            purcahsed: false,
            id: groceryArray.length,
            quantity:Number(form.qnty.value),
            itemName:form.name.value,
        }
     
        console.log(addData(newData))
    } )
    body.append(form)   
}

const renderSingle = (groceryItem)=>{
   const groceryHolder =  document.createElement("div")
   groceryHolder.className = "groceryHolder"
   groceryHolder.innerHTML = `
   <p>${groceryItem.itemName}</p>
   <div class = "qnty">
    <button id = "minus">-</button>
   <p>Quanitity : ${groceryItem.quantity}</p>
    <p id = "add" >+</p>
   </div>
   <label for = "purchased"> Need</label>
   <input id = "purchased" name = "purchased" type = "checkbox" ${!groceryItem.purchased && "checked"}/>
   <p id = "remove">X</p>
   `
   const removeButton = groceryHolder.querySelector("#remove")
   removeButton.addEventListener("click", ()=>{
        deleteData(groceryItem)
   })

   const addButton = groceryHolder.querySelector("#add")
   addButton.addEventListener("click", ()=>{
        groceryItem.quantity = groceryItem.quantity +1
        updateData(groceryItem)
   })

   const minusButton = groceryHolder.querySelector("#minus")
   minusButton.addEventListener("click", ()=>{
        groceryItem.quantity = groceryItem.quantity -1
        updateData(groceryItem) 
   })

   const qntyButton = groceryHolder.querySelector("#purchased")
   qntyButton.addEventListener("change", ()=>{
        groceryItem.purchased = !groceryItem.purchased 
        updateData(groceryItem) 
   })
   
   return groceryHolder
}

const renderAll = ()=>{
    const groceryHolders = groceryArray.map((groceryObject)=>{return renderSingle(groceryObject)})
    console.log(groceryHolders)
    groceryList.replaceChildren(...groceryHolders)
}



const init = ()=>{
    createForm()
    renderAll()
}
init()