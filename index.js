require('dotenv').config()
const express = require('express')
const app = express()

// Settings
app.set('port', process.env.PORT || 5550)

//midelwares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.use(require('./router'))

//start server
const server = app.listen(app.get('port'), ()=>{console.log(`server starting on port ${app.get('port')}`)})