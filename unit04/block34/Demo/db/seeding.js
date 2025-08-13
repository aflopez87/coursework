const client = require('./client');
const { createAnimals } = require('./queries/animalsSQL');

client.connect();

const createTables = async () => {
    const SQL = `
    DROP TABLE IF EXISTS animals;
    CREATE TABLE animals (
        id SERIAL PRIMARY KEY,
        species text NOT NULL,
        image text);

        INSERT INTO animals (species, image) VALUES ('crocodile', 'url');
        INSERT INTO animals (species, image) VALUES ('lion', 'url');
        INSERT INTO animals (species, image) VALUES ('dog', 'url');
        
    `
    await client.query(SQL);
};

const seedDatabase = async () => {
    
    const animal = {
        species: 'cat',
        url: 'https://unsplash.com/photos/a-close-up-of-a-cat-on-a-bed-gz0rGe7mhL8'

    }

    for(let i = 0; i < 10; i++) {
        await createAnimals(animal);
    }
}


module.exports = {createTables};


// functions you want to call
// client.disconnect();
