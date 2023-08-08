const express = require('express');
const app = express();
const people = require('./routes/people.js')
const auth = require('./routes/auth.js')

app
    .use(express.static('./node-express-course/02-express-tutorial/methods-public'))
    //urlencoded part
    .use(express.urlencoded({extended:false}))
    //parse json
    .use(express.json())
    //router from the auth.js file
    .use('/login', auth)
    //router from the people.js file
    .use('/api/people', people)

app.listen(5000,()=>{
    console.log('server on port 5000')
})