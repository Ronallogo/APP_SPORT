const router = require("express").Router();

const {postPlayer, getPlayer, editPlayer} = require('../controllers/app.player.controller');


router.post('/postPlayer' , postPlayer);
router.post('/getPlayer' , getPlayer);
router.post('/editPlayer', editPlayer);

module.exports = router;