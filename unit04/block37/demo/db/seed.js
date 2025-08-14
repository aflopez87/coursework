
import { faker } from '@faker-js/faker';
// import client from "./client.js"
// import { insertPatient } from "./queries/patients.js";
// import { insertDoctors } from "./queries/doctors.js";
// import { insertAppt } from "./queries/appointments.js";

const client = require ('./client')
const insertPatient = require ('./queries/patients')
const insertDoctors = require ('./queries/doctors')
const insertAppt = require ('./queries/appointments')

//id UUID PRIMARY KEY DEFAULT gen_random_uuid()
const createTables = async ()=>{
    await client.connect();
    const SQL =`
        DROP TABLE IF EXISTS appointments;
        DROP TABLE IF EXISTS doctors;
        DROP TABLE IF EXISTS patients;

        CREATE TABLE doctors(
        id serial PRIMARY KEY;
        name text not null)

        CREATE TABLE patients(
        id serial PRIMARY KEY;
        name text not null)

        CREATE TABLE appointments(
        id serial PRIMARY KEY;
        patient int REFERENCES patients(id) not null,
        doctor int REFERENCES doctors(id) not null,
        date date,
        reason text);
    `
    await client.query(SQL)
    await client.end()
}

// createTables()

const seed = async ()=>{
    await client.connect()
    const docIds = []
    const patientIds = []

    for (let i = 0; i<50; i++){
        const docName = faker.person.firstName() + " "+  faker.person.LastName()
        const newDoctor = await insertDoctors(docName)
        const newPatient = await insertPatient(faker.person.firstName()+" "+faker.person.lastName())
        docIds.push(newDoctor.id)
        patientIds.push(newPatient.id)
    }

     for (let x = 0; x<5; x++){
        const newAppointment = {
            doctor : docIds[x],
            patient : patientIds[x],
            date : faker.date.anytime(),
            reason : faker.lorem.sentence()
        }
        await insertAppt(newAppointment)
    }
    await client.end()
}

