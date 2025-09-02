const client = require('../client.js')

const createAnimals = async({species, image})=>{
    const SQL = `
        INSERT INTO animals(species, image) VALUES ($1,$2)
        RETURNING *;
    `
    const response = await client.query(SQL, [species, image])
    return response.rows[0]
}

const getAllAnimals = async()=>{
    const SQL = `
    SELECT * from animals;
    `
    const response = await client.query(SQL)
    return response.rows
}

const GetAnAnimal = async()=>{
    const SQL = `
    
    `
    const response = await client.query(SQL)
}

const updateAnimals = async({species, image}, id)=>{
    const SQL = `
        UPDATE animals
        SET species = $1, 
        image = $2
        WHERE id = $3
        RETURNING *;

    `
    const response = await client.query(SQL, [species, image, id])
    return response.rows[0]
}

const deleteAnimals = async(id)=>{
   try{ const SQL = `
        DELETE FROM animals 
        WHERE id = $1;
        `
        const response = await client.query(SQL, [id])
    return 'deleted!'}catch(err){
        console.log(err)
    }
}

module.exports= {createAnimals, updateAnimals, deleteAnimals, getAllAnimals};