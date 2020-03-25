const router = require('express').Router()

const Users = require('./userModel.js')


router.get('/', (req, res) => {
    Users.find()
        .then(param => {
            res.status(200).json(param)
        })
        .catch(err =>{
            res.send(err)
        })
})

module.exports = router