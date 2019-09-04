const jsonWebToken = require('express-jwt')

exports.authenticated = jsonWebToken({secret: 'haiiii-ini-rahasia-loh'})