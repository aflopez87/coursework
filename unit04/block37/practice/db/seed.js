const client = require ('./client')
const {faker} = require('@faker-js/faker')
const insertPatient = require('./queries/patients')
const insertDoctor = require('./queries/doctors')
const insertAppt = require('./queries/appointments')

//id UUID PRIMARY KEY DEFAULT gen_random_uuid()
const createTables = async ()=>{
    const SQl =`
        DROP TABLE IF EXISTS appointments;
        DROP TABLE IF EXISTS doctors;
        DROP TABLE IF EXISTS patients;

        CREATE TABLE doctors(
        id serial PRIMARY KEY,
        name text not null);

        CREATE TABLE patients(
        id serial PRIMARY KEY,
        name text not null);

        CREATE TABLE appointments(
        id serial PRIMARY KEY,
        patient int REFERENCES patients(id) not null,
        doctor int REFERENCES doctors(id) not null,  
        date date,
        reason text );
    `
    await client.query(SQl)
}


const seed = async ()=>{
    const docIds = []
    const patientIds = []
    for (let i = 0; i<50; i++){
        const docName = faker.person.firstName() + " "+ faker.person.lastName()
       const newDoctor = await insertDoctor(docName)
       const newPatient = await insertPatient(faker.person.firstName() + " "+ faker.person.lastName())
       docIds.push(newDoctor.id)
       patientIds.push(newPatient.id)
    }
    for (let x = 0; x<5; x++){
            const newAppointment = {
                doctor : docIds[x],
                patient : patientIds[x],
                reason : faker.lorem.sentence(),
                date: faker.date.anytime()
            }

           await insertAppt(newAppointment)
    }
}

const dataInit = async ()=>{
   client.connect()
   await createTables() 
   await seed()
   await client.end()
}

//dataInit()