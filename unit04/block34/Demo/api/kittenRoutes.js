const express  = require('express')
const animalRouter = express.Router()
module.exports = animalRouter
const {createAnimals, updateAnimals, deleteAnimals, getAllAnimals} = require('../db/queries/animalsSQL')


animalRouter.get("/",async(req,res, next)=>{
    res.send( await getAllAnimals())
})

//base.com/animals/
//add an animal
animalRouter.post("/", async (req,res,next)=>{
    !req.body ?
    res.sendStatus(400) :
    !req.body.species ?
    res.status(400).send("Please don't forget the species!"):
    !req.body.image ? 
    res.status(400).send("wait we need an image!!!"):
    res.send(await createAnimals(req.body))
})

//localhost:8080/animals/7
//update an animal
animalRouter.put("/:id",async (req,res,next)=>{
    const updatedAnimal = req.body
    const id = req.params.id
    res.send(await updateAnimals(updatedAnimal, id))
})


//localhost:8080/animals/7
//delete an animal
animalRouter.delete("/:id",async (req,res,next)=>{
    const id = req.params.id
    res.send(await deleteAnimals( id))
})