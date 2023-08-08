const express = require('express')
const routerLogin = express.Router()

routerLogin
    .post('/',(req,res)=>{
        const {name} = req.body
        if(name){
            return res.status(200).send(`welcome ${name}`)
        }
        res.status(401).send('please provide credentials')
    })

module.exports = routerLogin