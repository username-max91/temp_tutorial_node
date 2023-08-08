const express = require('express');
const app = express();
const logger = require('./logger-mw')
const authorize = require('./authorize-mw')
const morgan = require('morgan')

//req => middleware => res

app
    .use([logger,morgan('tiny')])
    .use(express.static('./public'))
    .get('/', (req,res)=>{
        res.send('Home')
    })
    .get('/about', authorize, (req,res)=>{
        console.log(req.user)
        res.send('About')
    })

app.listen(5000,()=>{
    console.log('server on port 5000')
})