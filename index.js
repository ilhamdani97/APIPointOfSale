const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')
const app = express()
const PORT = process.env.PORT || 3000

const UserController = require('./controllers/users')
const AuthController = require('./controllers/auth_login')
const { authenticated } = require('./middleware')

app.group("/api", (router) => {
    //auth API
    router.post('/login', AuthController.login)
      //API User
    router.get('/users', UserController.index)
    router.get('/user', UserController.show)
    router.post('/register', UserController.store)
    router.patch('/user/:id', authenticated, UserController.update)
    router.delete('/user/:id', authenticated, UserController.delete)
    
})

app.get('/', (req, res) => res.send('API STORE!'))
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))