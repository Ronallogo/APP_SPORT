const express = require('express');
const {postPerson, getPerson, editPerson} = require('../controllers/app.person.controllers');
const router = express.Router();

router.post('/postPerson' , postPerson);

router.post('/getPerson' , getPerson);

router.post('/editPerson' , editPerson);

 




module.exports = router;