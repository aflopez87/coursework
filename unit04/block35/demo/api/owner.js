const express = require('express')
const ownerRouter = express.Router()
module.exports = ownerRouter
const {getAllOwners, getAnOwner} = require('../db/queries/owner')

//get All
//base.com/owners/
ownerRouter.get("/", async(req,res,next)=>{
    res.send(await getAllOwners())
})

//get one
//base.com/owners/10
ownerRouter.get("/:id", async(req,res,next)=>{
    const id = req.params.id
    res.send(await getAnOwner(Number(id)))
})