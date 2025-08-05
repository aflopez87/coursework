const express = require('express');
const app = express();
const cookies = require('./data');
app.use(require('morgan')('dev'))
app.use(express.json());
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL||'postgres://localhost/cookies');

// get all
app.get('/cookies', async (req, res, next) => {
    const SQL = `
    SELECT * FROM cookies;
    `;
    const response  = await client.query(SQL);
    console.log(response.rows)
    res.send('testing');
});


// get one
app.get('/cookies/:id', async (req, res, next) => {
    const id = req.params.id;
    const SQL = `
    SELECT * FROM cookies WHERE id = $1;
    `;
    const response = await client.query(SQL, [id]);
    res.send(response.rows[0]);
});

// add one
app.get('/cookies', async(req, res, next) => {
    const newCookie = req.body;
    const SQL = `
    INSERT INTO cookies9name, qnty, price)
    VALUES ($1, $2, $3)`
    const response = await client.query(SQL, [newCookie.name, newCookie.qnty, newCookie.price]);
    res.send(response.rows[0]);
})

// update the quantity
app.patch('/cookies/:id', (req, res, next) => {
    const updatedProperty = req.body;
    const id = req.params.id;
    const cookieIndex = cookies.findIndex(cookie => Number(cookie.id) === Number(id));

    res.send(cookies[cookieIndex]);
});

// delete one
app.delete('/cookies/:id', (req, res, next) => {
    const id = req.params.id;
    const cookieIndex = cookies.findIndex(cookie => Number(cookie.id) === Number(id));
    cookies.splice(cookieIndex, 1);
    res.send(cookies);
});


const init = async ()=>{
    try{
        client.connect();
        const SQL =`
        DROP TABLE IF EXISTS cookies;
        CREATE table cookies(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            qnty integer default 10,
            price integer default 10
        );
        INSERT INTO cookies (name) VALUES('chocolate chip');
        INSERT INTO cookies (name, qnty) VALUES('sugar', 40);
        INSERT INTO cookies (price, name) VALUES(100, 'peanut butter');
        `
        await client.query(SQL);

        app.listen(3000, () => {
        console.log('the server is running!');
        });    
    }catch(err){
        console.error('Error initializing the database', err);  
    }
}

init();
