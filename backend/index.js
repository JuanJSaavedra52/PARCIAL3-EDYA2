const express = require('express')
require('dotenv').config()
const {dbConnection} = require('./database/config')
const cors = require('cors')
const bodyParser = require('body-parser')

//Para la App
const app = express();
app.use(express.json());
app.use(cors())

//Para la BD
dbConnection();


app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Rutas
app.use('/api', require('./routes/auth'))

//

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto', process.env.PORT)
})