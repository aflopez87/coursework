const express = require('express')
const animalRouter = require('./api/kittenRoutes')
const app = express()
const PORT = process.env.PORT || 8080
const {createTables} = require('./db/seeding') 
app.use(express.json())
app.use(require('morgan')('dev'))

app.get("/", (req, res, next)=>{
    res.send("Welcome to our zoo!!")
})


const init = async()=>{
    app.use("/animals", animalRouter)
    // app.use("/people", otherrouter)
    //  app.use("/houses", otherRouter)
    await createTables()
    console.log("tables have been created!!")
    app.listen(PORT, ()=>{
        console.log('The server is running!!')
    })
}

init();