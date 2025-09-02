const client = require('../client')
const addOwner = async({name, contact})=>{
    const SQL = `
    INSERT INTO owners(name, contact) VALUES ($1, $2)
    RETURNING *;
    `
    const response = await client.query(SQL, [name, contact])
    return response.rows[0]
}

const getAllOwners = async()=>{
    const SQL = `
    SELECT *
    FROM owners 
    JOIN pets ON owners.id = owner_id;
    `
    const response = await client.query(SQL)
    return response.rows
}

const getAnOwner = async(id)=>{
    const SQL = `
        SELECT name, contact from owners
        where id = $1;
    `
        const SQL2 = `
        SELECT * from pets
        WHERE owner_id = $1
        ;
    `
    const response = await client.query(SQL, [id])
    const response2 = await client.query(SQL2, [id])

    return {
        name: response.rows[0].name, 
        contact: response.rows[0].contact, 
        pet_name:response2.rows[0].pet_name, 
        species : response2.rows[0].species 
    }
    //     const SQL = `
    //     SELECT name, contact, pet_name, species
    //     FROM owners 
    //     JOIN pets ON owners.id = owner_id
    //     WHERE owners.id = $1;
    // `
    // const response = await client.query(SQL, [id])
    return response.rows[0]
        
}

const deleteOwner = async()=>{
    const SQL = `
    `
    const response = await client.query(SQL, [])
    return response.rows[0]
}

const updateOwner = async()=>{
    const SQL = `
    `
    const response = await client.query(SQL, [])
    return response.rows[0]
}

module.exports = {addOwner, getAllOwners, getAnOwner}