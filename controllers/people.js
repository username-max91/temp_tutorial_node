let {people} = require('../node-express-course/02-express-tutorial/data.js')

const getPeople = (req,res)=>{
    res.status(200).json({success:true,data:people})
    }

const postPeople = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name'})
    }
    res.status(201).send({success:true,person:name})
    }

const deletePeople = (req,res)=>{
    const person = people.find((person)=> person.id === Number(req.params.id))
    if(!person){
        return res
            .status(404)
            .json({success:false, msg:`no person with the id ${req.params.id}`})
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
        )
        return res.status(200).json({success: true, data: newPeople})
    }

const putPeople = (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    console.log(id,name)
    
    const person = people.find((person)=> person.id === Number(id))
    if(!person){
        return res
            .status(404)
            .json({success:false,msg:`no person with the id ${id}`})
    }
    res.send('hello world')
    }

const postPostmanPeople = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res
            .status(400)
            .json({success:false,msg:'please provide name'})
    }
    res.status(201).send({success: true, data: [...people, name]})
    }

module.exports = {
    getPeople,
    putPeople,
    postPeople,
    postPostmanPeople,
    deletePeople
}