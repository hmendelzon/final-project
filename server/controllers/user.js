const User = require('../models/User');

const createUser = (req, res) => {
  let currentUser = new User(req.body);

  currentUser.save()
    .then((user) => {
      res.status(200).json({ user: user })
    }).catch((error) => {
      console.log(error.message+new Date().getMinuets)
      res.status(400).send(error);
    })
}

const getAllUsers = (req, res) => {

  User.find({}, {})
    .then(users =>{
      res.send(users)}
      )
    .catch(err => {
      console.log(err)
      res.send(err)
    });
}

module.exports = { createUser, getAllUsers };