const express = require('express');
const app = express();
const logger = require('./logger-mw')
const authorize = require('./authorize-mw')
const morgan = require('morgan')

//req => middleware => res

app
    //app.use to integrate your middleware into the .get methods all at once
    //if a path is provided as below, middleware would work on this particular path
    //.use('/api',logger)
    //multiple middleware functions are executed in their order
    //multiple mw app.use([authorize,logger])
    .use(logger)
    //app.use() also to use static files from the ./public folder
    .use(express.static('./public'))
    .get('/', (req,res)=>{
        //substituted by function logger() above
        //const method = req.method;
        //const url = req.url;
        //const time = new Date().getFullYear();
        //console.log(method,url,time)
        //substituted by function logger() above;
        res.send('Home')
    })
    //authorize mw added on the /about route
    .get('/about', authorize, (req,res)=>{
        console.log(req.user)
        res.send('About')
    })

app.listen(5000,()=>{
    console.log('server on port 5000')
})