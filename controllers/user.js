let UserModel = require("../models/user");

let UserController = {
  find: async (req, res) => { 
    let found = await UserModel.find({name: req.params.username})
    res.json(found)
  }, 

  all: async (req, res) => {
    let allUsers = await UserModel.find()
    res.json(allUsers)
  }, 
  
  
},

