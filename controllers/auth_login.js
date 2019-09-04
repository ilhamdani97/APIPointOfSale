const jsonWebToken = require('jsonwebtoken')
const models = require('../models')
const User = models.user

exports.login = async (req, res) => {
    const { username, password } = req.body
      User.findOne({ where: {username,password } })
        .then(user => {
            if (user) {
                const token = jsonWebToken.sign({ userId: user.id}, 'haiiii-ini-rahasia-loh')
                res.status(200).send({
                    message: "Login Succes",
                    data: {
                        'email': user.email,
                        'username': user.username,
                        'handphone': user.handphone
                    },
                    token,
                })
            }
            else {
                res.send({
                    error: true,
                    message: 'Wrong Email or password !'
                })
            }
        })
}