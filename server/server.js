// Importing required modules
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import winston from 'winston'

// Defining port
const port = process.env.PORT || 9000

// Defining app
const app = express()

//Database Connection
/* * 
 * MySQL
 * const mysql_connect = require('./config/default').MySQL
 * mysql_connect();
 * 
 * Mongodb
 * const mongodb_connect = require('./config/default').Mongodb
 * mongodb_connect();
 */
 
 
// Defining middlewares
app.use(morgan('combined'));
app.use(bodyParser.json())
app.use(cors())

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining the Routes
app.use('/api', require('./routes/index'));

// Listening to port
app.listen(port)
console.log(`Listening On http://localhost:${port}/api`)

module.exports = app
