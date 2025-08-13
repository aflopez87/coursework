const client = require('../client')

const insertAppt = async ({doctor, patient, date, reason})=>{
    const SQL = `
    INSERT into patients(patient, doctors, date, reason) VALUES ($1, $2, $3, $4);
    RETURNING *
    `
    console.log(patient, doctor, date, reason)
    const response = await client.query(SQL, [octor, patient, date, reason])
    return response.rows
}

//get all
const getAppts = async (patient_id)=>{
    const SQL = `
    SELET * FROM appoinments
    WHERE  id = $1;
    `

    const response = await client.query(SQL, [octor, patient, date, reason])
    return response.rows
}

//get one
const getAnAppts = async (id)=>{
    const SQL = `
    SELET * FROM appoinments
    WHERE  id = $1;
    `

    const response = await client.query(SQL, [octor, patient, date, reason])
    return response.rows
}

// update
const changeAppt = async ({date, reason})=>{
    const SQL = `
    Update appointments
    SET date = $1,
    reason = $2
    WHERE id = $3;
    `

    const response = await client.query(SQL, [date, reason])
    return response.rows
}

// delete
const deleteAppt = async ({doctor, patient, date, reason})=>{
    const SQL = `
    DELETE from appointments
    WHERE id = $1;
    `

    const response = await client.query(SQL, [octor, patient, date, reason])
    return response.rows
}


module.exports = insertAppt

// SELECT 
//      table1.columnToReplaceFK AS newColumnNameA
//      table2.columnToReplaceFK AS newColumnNameB
//      any other data by column name
// FROM
//      join.table
//      JOIN table1 ON join_table.correspondingTable1Column = table1.primaryKeyColumn
//      JOIN table2 ON join_table.correspondingTable2Column = table2.primaryKeyColumn