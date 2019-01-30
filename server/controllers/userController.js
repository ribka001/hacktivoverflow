const User = require('../models/User')
const {compareCrypt} = require('../helpers/bcrypt')
const {getToken} = require('../helpers/jwt')
require('dotenv').config()

class UserController {
  static create(req, res) {
    let user = new User({
      email: req.body.email,
      password: req.body.password
    })
    user.save()
      .then(result => {
        res.status(201).json(result)
      })
      .catch(err => {
        res.status(500).json(err.message)
      })
  }

  static login(req, res) {
    User.findOne({
      email: req.body.email
    })
    .then((user) => {
      if (!user) {
        res.status(500).json({message: "user not found, please register first"})
      } else {
        if (compareCrypt(req.body.password, user.password)){
          let token = getToken(user._id, user.email);
          res.status(200).json(token)
        } else {
          res.status(400).json({message: "email or password is incorrect"})
        }                               
      }
    })
    .catch((err) => {
      res.status(500).json(err.message)
    })        
  }
}

module.exports = UserController