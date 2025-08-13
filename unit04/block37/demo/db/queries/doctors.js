const client = require('../client')

const insertDoctors = async ({name})=>{
    const SQL = `
    INSERT into doctors(name) VALUES ($1);
    RETURNING *
    `
    const response = await client.query(SQL, [name])
    return response.rows[0]
}
module.exports = insertDoctors