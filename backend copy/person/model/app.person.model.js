const connectDB = require("../../config/db.js");

class   PERSON{

    constructor(name, birthday , nationality ){
        this._name = name || null;
        this._nationality = nationality|| null;
        let test = new Date(birthday)|| null;
        this._birthday = (test == null)? null : birthday;
        }

     
    setPersonInformation(){
        //let x = "INSERT INTO `person_tab` (`_id`, `_person_name`, `_birth_person`, `_nation_person`) VALUES (NULL, 'RON', '20/08/2001', 'GABON')"
       /**
        * PREPARATION DE LA REQUETE SQL
        */
       const query = "INSERT INTO `person_tab` (`_id`, `_person_name`, `_birth_person`, `_nation_person`) VALUES" +`(NULL, '${this._name}', '${this._birthday}' , '${this._nationality}')` ;
        /**
         * param {ma requete et le callback en cas d erreur}
         *  */    
        connectDB.query(query , (err , res)=>{
            if(err){
                console.log('THIS IS THE ERROR_ :' + err);
                return;
            }
            else{
                console.log('QUERY_SUCCEEEDED!!!!');
            }
        });
             

    }

    getNamePerson(info){
        
        return {
            name  : this._name,
            birthday : this._birthday ,
            nationality : this._nationality
        } 
        
    }
    
} 
/**
 * @extends {PERSON} PLAYER
 */

class PLAYER extends PERSON {
    STATE = {
        good : 'GOOD',
        normal : 'NORMAL',
        sick : 'SICK'
    }
    constructor( weight , post) {
        this._weight = weight;
        this._post = post;
        this._state = 'GOOD';
    }
    get infoPlayer(){
        return {
            '':this.infoPerson() ,
            weight : this._weight,
            post :this._post

        }
    }

    get statePlayer(){
        return this._state;
    }
    /**
     * @param {string} state
     */
    set state(state){
       this._state =  (state.toLocaleUpperCase() in this.STATE) ?  state : this._state
    }
    
    
};
 
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

module.exports = {
    PERSON , 
    PLAYER , 
    TEAM,
    CHAMPIONNAT,
    REFEREE
} ;
