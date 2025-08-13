const express = require ('express');
const animalRouter = require('./api/kittenRoutes');
const app = express ();
const PORT = process.env.PORT || 8080;
const {createTables} = require('./db/seeding')
app.use(express.json()); // Middleware to parse JSON bodies


const init = async () => {
    
    app.use("animals", animalRouter);
    // app.use("/people", otherRouter); // Assuming otherRouter is defined elsewhere
    await createTables()
    console.log("Tables created successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

init()