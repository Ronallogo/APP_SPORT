const connectDB = require("../../config/db.js");
const {valueReturned, simpleRequest} = require('../../tools_functions/app.tools.fonctions.js')

class TEAM {
    /**
     * 
     * @param {string} name 
   
     */
    constructor(name , abbr , region , arena , arena_capacity , owner ){
        this._name = name;
        this._abbreviation = abbr,
        this._region = region ,
        this._arena = arena,
        this._arena_capacity =  arena_capacity,
        this._owner = owner;
    }
    
         
    setTeamInformation(){
        //let x = "INSERT INTO `person_tab` (`_id`, `_person_name`, `_birth_person`, `_nation_person`) VALUES (NULL, 'RON', '20/08/2001', 'GABON')"
       /**
        * PREPARATION DE LA REQUETE SQL
        */
        
        const values = `VALUES (NULL, "${this._name}", "${this._abbreviation}" , '${this._region}' , '${this._arena}' , '${this._arena_capacity}' , '${this._owner}')`
        const query = "INSERT INTO `team` (`_id`, `_team_name`, `_team_abbreviation`, `_team_region` , `_team_arena` , `_team_arena_capacity` ,`_team_owner` ) " + values ;
        simpleRequest(query , 'setTeamInformation');
             

    }

};



module.exports = {TEAM};