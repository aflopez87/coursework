const client = require('./client')
const {createAnimals} = require('./queries/animalsSQL')

const seedDatabase = async()=>{

    const animal = {
        species:"cat",
        image:'https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }

    for(let i=0; i<10; i++){
        await createAnimals(animal)
    }   
}



client.connect()
seedDatabase()



const createTables = async ()=>{
    const SQL = `
    DROP TABLE IF EXISTS animals;
    CREATE TABLE animals(
    id serial PRIMARY KEY,
    species text not null, 
    image text);

    INSERT INTO animals(species, image) VALUES ('crocodile', 'url');
    INSERT INTO animals(species, image) VALUES ('lion', 'url');
    INSERT INTO animals(species, image) VALUES ('dog', 'url');

    `
    await client.query(SQL)
}



module.exports = {createTables}
//functions you want to call
//client.disconnect()