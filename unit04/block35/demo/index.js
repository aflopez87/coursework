const express = require ('express')
const app = express()
app.use(require('morgan')('dev'))
app.use(express.json())
const createTable = require('./db/seed')
const { addPet } = require('./db/queries/pet')


app.use("/owners", require('./api/owner'))

app.post('/owners/:id/pets', async(req,res, next)=>{
    const newPet = req.body
    const ownerId = req.params.id
    newPet.owner_id = ownerId
    res.send(await addPet(newPet))
})

const init = async()=>{
const client = require('./db/client')
    client.connect()
    //await createTable()
    console.log('Data Seeded!')
    app.listen(8080, ()=>{
        console.log("Ther server is running!!")
    })
}

init()