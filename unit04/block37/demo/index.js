const express = require('express');
const app = express();
app.use(express.json());
app.use(require('morgan')('dev'))

app.use("/patients", require('./api/patientRouter'))

app.get("/", (req, res, next))

const init = async () =>{
    app.listen(8080 || process.env.PORT, ()=>{
        console.log("Connected")
    })
}
init()