const express = require('express');
const app = express();
let {people} = require('./node-express-course/02-express-tutorial/data.js')

app
    .use(express.static('./node-express-course/02-express-tutorial/methods-public'))
    //urlencoded part
    .use(express.urlencoded({extended:false}))
    //parse json
    .use(express.json())
    .get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})
    .post('/api/people',(req,res)=>{
        const {name} = req.body
        if(!name){
            return res.status(400).json({success:false,msg:'please provide name'})
        }
        res.status(201).send({success:true,person:name})
    })
    .post('/api/postman/people',(req,res)=>{
        const {name} = req.body
        if(!name){
            return res
                .status(400)
                .json({success:false,msg:'please provide name'})
        }
        res.status(201).send({success: true, data: [...people, name]})
    })
    .post('/login',(req,res)=>{
        const {name} = req.body
        if(name){
            return res.status(200).send(`welcome ${name}`)
        }
        else{
            res.status(401).send('please provide credentials')
        }
        res.send('POST')
        
    })

app.listen(5000,()=>{
    console.log('server on port 5000')
})