//To feed the DATABASE_URL variable, present in the env file, 
//in the process object, we will use the env library

const mongoose = require('mongoose')

require("dotenv").config() //this loads the entire data present in the env file in the process object

//function establishes the connection on calling
const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('db connection is successful'))
  .catch((error) => {
    console.log("error found")
    console.error(error.message)
    process.exit(1) //exit with failure
  }) 
}

module.exports = dbConnect;