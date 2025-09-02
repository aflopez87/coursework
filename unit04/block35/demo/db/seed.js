const client = require('./client')
const {addPet} = require('./queries/pet')
const {addOwner} = require('./queries/owner')
const {faker} = require ('@faker-js/faker')

//client.connect();



const createTables = async()=>{
    const SQL =`
        DROP TABLE IF EXISTS pets;
        DROP TABLE IF EXISTS owners;
        CREATE TABLE owners(
        id SERIAL PRIMARY KEY, 
        name text not null,
        contact text 
        );
        CREATE TABLE pets(
        id SERIAL PRIMARY KEY ,
        pet_name text not null,
        species text not null,
        owner_id int REFERENCES owners(id)
        );

    `
     await client.query(SQL)
}
createTables();
const seed = async()=>{
    const owners = []
    for(let i = 0; i<10;i++){
        const newOwner = {
            name : faker.person.firstName() +" "+ faker.person.lastName(),
            contact : faker.phone.number() 
        }
        const databaseOwner = await addOwner(newOwner)
        owners.push(databaseOwner)
    }
    //pet loop
    for(let x = 0; x<10;x++){
        const newPet = {
            name : faker.animal.petName(),
            species : faker.animal.type(),
            owner_id : owners[x].id
        }
        await addPet(newPet)
    }

}


seed();

//client.end();

module.exports = createTables