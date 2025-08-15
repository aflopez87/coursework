const client = require('../client')
//POST
const insertAppt = async ({doctor, patient, date, reason})=>{
    const SQL = `
    INSERT into appointments(patient, doctor, date, reason) VALUES ($1, $2, $3, $4)
    RETURNING *;
    `
    const response = await client.query(SQL,[doctor, patient, date, reason])
    return response.rows[0]
}
//get all
const getAppts = async (patient_id)=>{
    const SQL = `
    SELECT 
        doctors.name as doctor_name, 
        patients.name as patient_name, 
        reason, 
        date 
    FROM 
        appointments 
        JOIN doctors ON appointments.doctor = doctors.id 
        JOIN patients ON appointments.patient = patients.id
        WHERE patient = $1;
    `
    const response = await client.query(SQL, [patient_id])
    console.log(response.rows, "here!!")
    return response.rows
}
//get one
const getAnAppt = async (id)=>{
    const SQL = `
        select * from appointments where id = 3;
    `
    const response = await client.query(SQL)
    console.log(id)
    return response.rows[0]
}
//update
const changeAppt = async ({date, reason})=>{
    const SQL = `
    UPDATE appointments 
    SET date = $1,
    reason = $2
    WHERE id = $3
    RETURNING *;
    `
    const response = await client.query(SQL,[date, reason])
    return response.rows[0]
}

//delete
const deleteAppt = async (id)=>{
    const SQL = `
    DELETE from appointments
    WHERE id = $1;
    `
    const response = await client.query(SQL,[id])
    return response.rows[0]
}
module.exports = {insertAppt, getAnAppt, getAppts, deleteAppt, changeAppt}



// SELECT 
//     table1.columnToReplaceFK AS newColumnNameA
//     table2.columnToReplaceFK AS newColumnNameB
//      any other data by column name
// FROM 
//     join_table
//     JOIN table1 ON join_table.correspondingTable1Column = table1.primaryKeyColumn
//     JOIN table2 ON join_table.correspondingTable2Column = table2.primaryKeyColumn