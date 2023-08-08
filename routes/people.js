const express = require('express')
const router = express.Router()
//controllers folder for reference
const {
    getPeople,
    putPeople,
    postPeople,
    postPostmanPeople,
    deletePeople
} = require('../controllers/people.js')
//router folder for reference
router
.get('/', getPeople)
.post('/', postPeople)
.post('/postman', postPostmanPeople)
//app.put method example
router.put('/:id', putPeople) 
//app.delete method example, based on id and returns new data list after deletion
router.delete('/:id', deletePeople)

//alternative variant to install routes:
//router.route('/')
//        .get(getPeople)
//        .post(postPeople)
//        .put(putPeople)
//        .delete(deletePeople)
//router.route('/postman').post(postPostmanPeople)
//router.route('/:id').put(putPeople)

module.exports = router