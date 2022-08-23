require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_CONNECT)
console.log(process.env.DB_CONNECT)
