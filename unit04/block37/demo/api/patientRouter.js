const express = require ('express')
const patientRouter = express.Router()
module.exports = patientRouter
const {insertAppt, getAnAppt, getAppts} = require('../db/queries/appointments')

//get all
//localhost/patients/id/appts
patientRouter.get("/:id/appts", async(req,res,next)=>{
    const patient_id = req.params.id
    res.send(await getAppts(patient_id))
})

//getOne
//localhost/patients/patient_id/appt/appt_id
patientRouter.get("/", async(req,res,next)=>{})

// post new appointment

// localhost/patients/id/appts
patientRouter.post("/", async (req,res,next)=>{})