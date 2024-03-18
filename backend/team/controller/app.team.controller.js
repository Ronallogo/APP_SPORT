const { resume } = require('../../config/db');
const { simpleRequest, valueReturned } = require('../../tools_functions/app.tools.fonctions');
const modelAppTeam = require('../models/app.team.models');
const { editInformationTeam } = require('./app.team.function');

module.exports.postTeam = async (req , res) => {

    const dTeam = {
        name :  req.body.team_name ,
        abbr : req.body.team_abbr,
        region : req.body.team_region ,
        arena : req.body.team_arena,
        arena_capacity : req.body.team_arena_capacity,
        owner : req.body.team_owner
      
    }

    if((dTeam['name'] & dTeam['abbr'] & dTeam['region'] & dTeam['arena'] & dTeam['arena_capacity'])  || dTeam['owner']){

        const team = new modelAppTeam.TEAM(dTeam['name'] , dTeam["abbr"] , dTeam['region'] , dTeam['arena'] , dTeam['arena_capacity'] , dTeam['owner']);
        team.setTeamInformation();
        res.status(200).json(team);
        delete team;
    }
    else{
        res.status(500).json({message : 'SOMETHING_IS_WRONG'});
    }

}


module.exports.getTeam = async (req , res) => {

    
    const value = (req.body.team_id)? req.body.team_id :(req.body.team_name)? req.body.team_name : null;
    if(value != null){
        let query = "SELECT * FROM `team` WHERE ";
        query = (req.body.team_id)? query +`team._id = ${value}`: (req.body.team_name)?  query +`team._team_name = '${value}'` : query + '1';
        console.log(query);
        const team = await valueReturned(query);
        res.status(200).json(team);
    }
    else{
        res.status(500).json({message : "ERROR_GET_TEAM"});
    }
       

}

module.exports.editTeam  = async (req , res)=>{
    
    try{
        console.log('insisde')
        const dTeam = {
            identity: req.body.identity,
            new_info: req.body.new_info ,
            name_info:req.body.name_info
        }
        await editInformationTeam(dTeam['identity'] , dTeam['new_info'] , dTeam['name_info']);
        res.status(200).json({message : 'EDITATION_TEAM_SUCCEED'});
    }
    catch(error){
        res.status(500).json({message :` EDTITATION_TEAM_FAILED : ${error}`});
    }
}