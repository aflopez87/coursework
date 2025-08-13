const express = require('express');
const animalRouter = express.Router();
module.exports = animalRouter;
const { createAnimals, updateAnimals } = require('../db/queries/animalsSQL');

 
// base.com/animals/
// get all animals
animalRouter.post("/", async (res, req, next) => {
    req.body?
    res.status(200).send(await createAnimals(req.body)) :
    !req.body.species ? 
    res.status(400).send("Please don't forget the species!"):
    !req.body.image ?
    res.status(400).send("Please don't forget the image!"):
    res.send(await createAnimals(req.body));
});

// localhost:8080/animals/7
animalRouter.put("/:id", async (res, req, next) => {
    const updatedAnimal = req.body;
    const id = req.params.id;
    res.send(await updateAnimals(updatedAnimal, id));
});

// localhost:8080/animals/7
animalRouter.delete("/:id", async (res, req, next) => {
    const id = req.params.id;
    res.send(await deleteAnimals(id));
})