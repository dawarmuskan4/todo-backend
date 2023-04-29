//server instantiated
const express = require("express")
const app = express()

//used to parse req.body -> put and post
const bodyParser = require("body-parser")
//specifically parse JSON data & add it to the request.body object
app.use(bodyParser.json())

//load config from env file
require("dotenv").config()
const PORT = process.env.PORT || 4000

//server activated on port 3000
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`)
})

//import routes for todo api
const todoRoutes = require('./routes/todoRoute')

//mount(add) the todo api route
app.use('/api/v1', todoRoutes)

//db connection
const dbConnect = require("./config/database")
dbConnect()

//default route
app.get("/", (req,res) => {
  res.send(`<h1>This is home page</h1>`)
})