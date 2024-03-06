const express = require('express');
const {postPerson, getPerson} = require('../controllers/app.person.controllers');
const router = express.Router();

router.post('/postPerson' , postPerson);

router.post('/getPerson' , getPerson);

 




module.exports = router;