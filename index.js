const express = require('express');
const app = express()
const taskRoutes = require('./routes/tasks')
require('dotenv').config()

// middelware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/v1/tasks', taskRoutes)

// config db
require('./config/db.config')


app.listen(process.env.PORT, console.log(`Server is listen on port ${process.env.PORT}...`))