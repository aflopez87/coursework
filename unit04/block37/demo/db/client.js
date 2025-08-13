const pg = require('pg')
const {Client} = new pg
const client = newpg.Client(process.env.DATABASE_URL || 'postgress://localhost/hospital')

module.exports