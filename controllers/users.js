const jsonWebToken = require('jsonwebtoken')
const models = require('../models')
const User = models.user
const jwt = require('jsonwebtoken')

exports.index = (req, res) => {
    User.findAll({
        attributes: ['id', 'username', 'email', 'handphone']
    })
        .then(user => {
            if (user) {
                return res.status(200).json({
                    message: 'Success get Data User',
                    data: user
                })
            } else {
                return res.status(500).json({
                    message: 'Failed get data User',
                })
            }
        })
}

exports.show = (req, res) => {
    let token = req.headers['authorization']
    console.log(token)
    const users = jwt.verify(token, 'haiiii-ini-rahasia-loh')
    User.findOne({
        where: { id: users.userId },
        attributes: ['username', 'email', 'handphone']
    }).then(user => {
        if (user) {
            return res.send({
                message: 'Success get Data User',
                data: user
            })
        } else {
            return res.send({
                message: 'Failed get data User',
            })
        }
    })
}

exports.store = (req, res) => {
    const { username, password } = req.body
    if (!username) {
        return res.send({
            message: 'User Name Cannot be Null'
        });
    }
    if (!password) {
        return res.send({
            message: 'Password Cannot be Null'
        })
    }
    User.create(req.body).then(user => {
        const token = jsonWebToken.sign({ userId: user.id }, 'haiiii-ini-rahasia-loh')
        res.status(200).send({
            message: "Registration success",
            data: {
                'email': user.email,
                'username': user.username,
                'handphone': handphone
            },
            token
        })
    })
}

exports.update = (req, res) => {
    User.update(
        req.body,
        { where: { id: req.params.id } }
    ).then(user => {
        res.status(200).send({
            message: "success",
            user
        })
    })
}

exports.delete = (req, res) => {
    User.destroy({ where: { id: req.params.id } }).then(todo => {
        res.status(200).send({
            message: "success",
            todo
        })
    })
}