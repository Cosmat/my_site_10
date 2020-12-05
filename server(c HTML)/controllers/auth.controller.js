// const bcrypt = require('bcrypt-nodejs')
// const jwt = require('jsonwebtoken')
// const keys = require('../keys')
// const User = require('../models/user.model')

// const { state } = require('../../store/auth')

module.exports.login = async (req, res) => {
  res.status(200).json({ message: "Response from login" })
  // console.log('controllers/auth.controller: start')
  // const candidate = await User.findOne({nick: req.body.nick})
  // console.log('controllers/auth.controller: candidate: ', candidate)
  // if (candidate) {
  //     const isEmailCorrect = bcrypt.compareSync(req.body.email, candidate.email)
  //     if (isEmailCorrect) {
  //         const token = jwt.sign({
  //             nick: candidate.nick,
  //             userId: candidate._id
  //         }, keys.JWT, {expiresIn: 60 * 60})
  //         res.status(200).json({token})
  //     } else {
  //         res.status(401).json({message: 'Email неверен'})
  //     }

  // } else {
  //     res.status(404).json({message: 'Пользователь не найден'})
  // }
}

module.exports.createUser = async (req, res) => {
  res.status(200).json({ message: "Response from CreateUser" })
  // const candidate = await User.findOne({nick: req.body.nick})
  // if(candidate) {
  //     res.status(409).json({message: 'Такой nick уже занят'})
  //     }

  // else {
  //     const salt = bcrypt.genSaltSync(10)
  //     const user = new User({
  //        nick: req.body.nick,
  //        name: req.body.name,
  //        surname: req.body.surname,
  //        email:  bcrypt.hashSync(req.body.email, salt)
  //     })
  //     await user.save()
  //     res.status(201).json(user)
  // }
}
