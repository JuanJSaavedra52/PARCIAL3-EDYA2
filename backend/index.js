const express = require('express')
require('dotenv').config()
const {dbConnection} = require('./database/config')
const bodyParser = require('body-parser')

//Para la App
const app = express();

//Para la BD
dbConnection();

app.use(express.static('public'))

//
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto', process.env.PORT)
})