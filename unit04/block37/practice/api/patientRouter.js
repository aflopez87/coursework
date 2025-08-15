const express = require('express')
const patientRouter = express.Router()
module.exports = patientRouter
const {insertAppt, getAnAppt, getAppts} = require('../db/queries/appointments')


//get all appt
//localhost/patients/id/appts
patientRouter.get("/:id/appts", async(req,res,next)=>{
    const patient_id = req.params.id
    res.send(await getAppts(patient_id))
})

// //getOne appt
// //localhost/patients/patient_id/appts/appt_id
// patientRouter.get("/:patient_id/appt/:appt_id", async(req,res,next)=>{
//     const appt_id = req.params.appt_id
//     res.send(getAnAppt(appt_id))
// })

//post new appointment

//localhost/patients/id/appts
patientRouter.post("/:id/appt", async(req,res,next)=>{
    const newAppointment = req.body
    req.body.patient = req.params.id
    res.send(await insertAppt(newAppointment))
})