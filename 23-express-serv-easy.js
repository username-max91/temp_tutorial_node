
//app.get
//app.post
//app.put
//app.delete
//app.use
//app.listen
//app.all

//short version for express server
const express = require('express')
const app = express()
const path = require('path')

//setup static middleware
app.use(express.static('./public'))

//app.get below could be placed into statis assets as well
//app.get('/',(req,res)=>{
//    res.sendFile(path.resolve(__dirname,'./node-express-course/02-express-tutorial/navbar-app/index.html'))
//})

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,()=>{
    console.log('server is on 5000')
})