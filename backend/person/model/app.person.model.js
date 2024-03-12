const connectDB = require("../../config/db.js");
const {valueReturned, simpleRequest} = require('../../tools_functions/app.tools.fonctions.js')

class   PERSON{
    /**
     * 
     * @param {string} name 
     * @param {string} birthday 
     * @param {string} nationality 
     * @param {string} nature 
     */
    
    constructor(name, birthday , nationality ,nature){
        this._name = name || null;

        this._nationality = nationality|| null;

        let test = new Date(birthday)|| null;

        this._birthday =  (test instanceof Date)?   birthday : null;

        this._nature = (nature in ['referee' , 'player'])? nature:  null;
      
        }
    /**
     * 
     * @param {string} type 
     */
     
    setPersonInformation(type){
        //let x = "INSERT INTO `person_tab` (`_id`, `_person_name`, `_birth_person`, `_nation_person`) VALUES (NULL, 'RON', '20/08/2001', 'GABON')"
       /**
        * PREPARATION DE LA REQUETE SQL
        */
        this._nature = (type.toLocaleLowerCase() in ['player' , 'referee'])? type : null ;
        const values = `VALUES (NULL, "${this._name}", "${this._birthday}" , '${this._nationality}' , '${type}')`
        const query = "INSERT INTO `person_tab` (`_id`, `_person_name`, `_birth_person`, `_nation_person` , `_nature_person`) " + values ;
        simpleRequest(query , 'setPersonInformation');
             

    }
     

    async getIdByNamePerson(name){

        try {
            const queries =  "SELECT  person_tab._id FROM `person_tab` WHERE person_tab._person_name =  "+`'${name}'`; 
            const rows = await valueReturned(queries);
            return rows ;
        } catch (error) {
            console.log(error);
        }

       

    }
    
  
    
    
} 

 
   class TEAM {
    /**
     * 
     * @param {string} name 
   
     */
    constructor(name ){
        this._name = name;
        this._pointEarned = 0,
        this._pointRetired = 0,
        this.positionSeason = 0,
        this._point = 0
    }
    

};



class CHAMPIONNAT{
    /**
     * 
     * @param {string} name 
     * @param {[...PLAYER]} equipes 
     * @param {[...REFEREE]} referees 
     */
    constructor(name , equipes , referees ){
        this._name  = name;
        this._equipes = [...equipes];
        this._referee = [...referees];
    }
}

/**
 * @extends {PERSON} REFEREE
 */

class REFEREE extends PERSON {
    FUNC = {
        rght_referee : "right",
        left_referee  : 'left',
        center_referee: " center"
    }
    constructor(name  , birthday , nationality, func){
        this.func = func ;
        this._name = name ;
        this._birthday = birthday;
        this._nationality  = nationality;
         

    }
    /**
     * @param {string} func
     */
    set setFuncReferree(func){
        this.func = (func in this.FUNC)? func : this.func;

    }
}

class MATCH {
    constructor(first_team , second_team , referee , stadium , date){
            this._first_team = first_team ,
            this._second_team = second_team,
            this._referee = referee ,
            this._stadium = stadium,
            this._date = date
           
    }
}

module.exports = {PERSON};
