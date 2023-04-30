// import todoSchema/model
const Todo = require('../models/Todo')

//define route handler

exports.getTodo = async(req, res) => {
  try{
    //fetch all todo from database
    //mongoose library provides many functions such as find, create, findById
    const todos = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data : todos,
      message: "Entire Todo data is fetched"
    })
  }
  catch(err){
    console.error(err)
    res.status(500).json({
      success: false,
      data:"Internal server error", 
      message: err.message
    })
  }
}

exports.getTodoById = async(req, res) => {
  try{
    //extract todo item basis on id
    const id = req.params.id
    const todo = await Todo.findById({_id: id})

    //data for given id not found
    if(!todo){
      return res.status(404).json({
        success: false,
        message: "No data found with given id"
      })
    }
    res.status(200).json({
      success: true,
      data : todo,
      message: `Todo with ${id} successfully fetched`
    })
  }
  catch(err){
    console.error(err)
    res.status(500).json({
      success: false,
      data:"Internal server error", 
      message: err.message
    })
  }
}