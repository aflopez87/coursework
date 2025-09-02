const client = require('../client')
const addPet = async({name, species, owner_id})=>{
    const SQL = `
    INSERT INTO pets(pet_name, species, owner_id ) VALUES ($1, $2, $3)
    RETURNING *;
    `
    const response = await client.query(SQL, [name, species, owner_id])
    return response.rows[0]
}

const getAllPets = async()=>{
    const SQL = `
    `
    const response = await client.query(SQL)
    return response.rows
}

const getAnPet = async(id)=>{
    const SQL = `
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}

const deletePet = async()=>{
    const SQL = `
    `
    const response = await client.query(SQL, [])
    return response.rows[0]
}

const updatePet = async()=>{
    const SQL = `
    `
    const response = await client.query(SQL, [])
    return response.rows[0]
}

module.exports = {addPet}