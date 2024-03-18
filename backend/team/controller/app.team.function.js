const connectDB = require("../../config/db.js");
 
const { valueReturned, simpleRequest, setColumn } = require("../../tools_functions/app.tools.fonctions.js");

module.exports.editInformationTeam = async (team_identity , new_info , name_info)=> {
    /**
     * cette constante constient les nom des colonne dans la base de données
     */
    const Column = {
        name :'_team_name' , 
        abbr :'_team_abbreviation' ,
        region : '_team_region' , 
        arena :'_team_arena ',
        arena_capacity : '_team_arena_capacity',
        owner : '_team_owner'
 


    };

    const ColumnIndexed = await  setColumn(`_team_${name_info}` , Column) ; 
    var querie;
    
   /**  
    * cette façon se servira du  déclenchement de l'erreur de JSON.parse
    * au cas ou team_identity est un  mots au lieu d un nombre en chaine de caractere
    * et donc ce servira de l 'erreur du prmeir bloque de code pour executer l autre bloc
    *  */ 
   try {
    
        if(typeof JSON.parse(team_identity) == 'number'){
             
            querie = "UPDATE  `team` SET " +`team.${ColumnIndexed} =  '${new_info}' WHERE team._id = ${team_identity}`;
        }
   } catch (error) {
       
       if(typeof team_identity == 'string'){
           querie = "UPDATE  `team` SET " +`team.${ColumnIndexed} =  '${new_info}' WHERE team._team_name = '${team_identity}'` ;
       }
    }
 
     
    simpleRequest(querie , 'editInformationteam');
    //return querie;

}


 