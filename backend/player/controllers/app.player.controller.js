const appModelPlayer = require('../models/app.player.model');
const { getInformationPlayer, editInformationPlayer } = require('./app.player.function');

module.exports.postPlayer = async (req , res) => {

    ///////////              ***THIS OBJECT ALLOWS ME REDUCINT THE SIDE OF REQUEST PARAMETERS***           ////////////
    const dPlayer = {
        name :  req.body.name_player ,
        birth : req.body.birth_player ,
        nation : req.body.nation_player ,
        weight : req.body.weight_player,
        height : req.body.height_player,
        post : req.body.post_player,
        state : req.body.state_player
    }
    /////     ***CHECKING IF ALL PARAMETERS ARE FILLED***    ///////////

    if (dPlayer['name'] && dPlayer["birth"] && dPlayer["nation"] && dPlayer['post'] && dPlayer['state'] && dPlayer['weight'] && dPlayer['height']) {

////////////          PLAYER OBJECT CREATION THROUGH THE CONST appModelPlayer    ////////////////
            const player =  new appModelPlayer.PLAYER(
                dPlayer['name'],
                dPlayer['birth'],
                dPlayer['nation'],
                dPlayer['weight'],
                dPlayer['height'],
                dPlayer['post'],
                dPlayer['state']
               

            );

            ///////////    SEND REQUEST TO THE DATABASE  ///////////////////
            await player.setPlayerInformation();
            res.status(200).json(player);
            delete player;      
            
    }
    

        else{
            res.status(500).json({message :'ERROR_POST_PLAYER'});
        }
    };


module.exports.getPlayer = async (req , res)=>{
    if(req.body.id_player || req.body.name_player){
        const indexedPlayer = await getInformationPlayer(req.body.id_player || req.body.name_player);
        (!indexedPlayer)? res.status(500).json({message:'PLAYER_NOT_FOUND'}) :   res.status(200).json(indexedPlayer);
      
    }
    else{
        res.status(500).json({message :'ERROR_GET_PLAYER'});
    }
}

module.exports.editPlayer = async (req , res) =>{
    if(req.body.id_person &&  req.body.new_data &&  req.body.name_data){
        console.log('inside_1');
        const dPlayer = {
            id : req.body.id_person,
            new_data : req.body.new_data,
            name_data : req.body.name_data
        }
        await editInformationPlayer(dPlayer['id'] , dPlayer['new_data']  , dPlayer['name_data'] );
        res.status(200).json({message : 'EDITATION_PLAYER_SUCCEEDED  !!!!'});
    }
    else{
        res.status(500).json({message :'ERROR_EDIT_PLAYER'});
    }
}
