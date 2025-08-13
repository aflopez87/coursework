const client = require('../client');

const createAnimals = async ({species, image}) => {
    const SQL = `
         INSERT INTO animals (species, image) VALUES ($1, $2);
         RETURNING *;
    `;
    const response = client.query(SQL, [species, image]);
    return response.rows[0];
}

const GetAllAnimals = async () => {
    const SQL = `
        SELECT * FROM animals; 
    `;
    const response = client.query(SQL);
}

const GetAnAnimal = async () => {
    const SQL = `
        SELECT * FROM animals
        WHERE id = $1;   
    `;
    const response = client.query(SQL);
}

const updateAnimals = async ({species, image}, id) => {
    const SQL = `
        UPDATE animals 
        SET species = $1, image = $2
        WHERE id = $3;
        RETURNING *;
    `;
    const response = client.query(SQL, [species, image, id]);
    return response.rows[0];
}

const deleteAnimals = async (id) => {
    const SQL = `
        DELETE FROM animals
        WHERE id = $1;

    `;
    const response = client.query(SQL, [id]);
    return 'deleted';
}

module.exports = { createAnimals, GetAllAnimals, GetAnAnimal, updateAnimals, deleteAnimals }