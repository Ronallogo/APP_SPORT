const router = require("express").Router();

const {postTeam, getTeam, editTeam} =  require('../controller/app.team.controller')


router.post('/postTeam' , postTeam);
router.post('/getTeam' , getTeam);
router.post('/editTeam' , editTeam);
 

module.exports = router;