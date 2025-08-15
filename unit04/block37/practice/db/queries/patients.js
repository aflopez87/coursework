const client = require('../client')

const insertPatient = async (name)=>{
    const SQL = `
    INSERT into patients(name) VALUES ($1)
    RETURNING *;
    `
    const response = await client.query(SQL,[name])
    return response.rows[0]
}
module.exports = insertPatient

// const insertPatient = async ()=>{
//     const SQL = `
//     `
//     const response = await client.query(SQL,[])
//     return response.rows
// }

// const insertPatient = async ()=>{
//     const SQL = `
//     `
//     const response = await client.query(SQL,[])
//     return response.rows
// }

// const insertPatient = async ()=>{
//     const SQL = `
//     `
//     const response = await client.query(SQL,[])
//     return response.rows
// }

// const insertPatient = async ()=>{
//     const SQL = `
//     `
//     const response = await client.query(SQL,[])
//     return response.rows
// }