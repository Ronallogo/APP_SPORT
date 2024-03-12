const connectDB = require("../../config/db.js");
const appModel = require('../../person/model/app.person.model.js');
const { simpleRequest } = require("../../tools_functions/app.tools.fonctions.js");

/**
 * @extends {appModel.PERSON} PLAYER
 */

class PLAYER extends appModel.PERSON {
    
    /**
     * 
     * @param {string} name 
     * @param {string} birth 
     * @param {string} nation 
     * @param {number} weight 
     * @param {string} post 
     */
    constructor(name , birth , nation , weight , height , post , state) {
        super();
        this._name = name;
        this._birthday = birth;
        this._nationality = nation;
        this._weight = weight;
        this._height = height ;
        this._post = post;
        this._state = state || 'GOOD';
        
    }
    async setPlayerInformation(){
//////////       AFTER CREATION OF THIS OBJECT THIS FONCTION SEND FIRST THE INFORMATION IN THE PERSON_TAB   ///////////
           this.setPersonInformation('player');
/////          TAKE ID OF THIS PERSON AS FOREIGN_KEY
            const _person_ = await this.getIdByNamePerson(this._name);
           
           // console.log('id recupérée '+   _person_[0]._id );
            /////INSERT INTO `player_tab` (`_id`, `_person_`, `_weight_player`, `_post_player`) VALUES (NULL, '55', '150', 'AF');

/////              CUT THE REQUEST IN TWO PARTS ///////////////

            const values  = `VALUES  (NULL ,'${_person_[0]._id}' , '${this._weight}' ,' ${this._height}' , '${this._post}' , '${this._state}')` ;
            const query = 'INSERT INTO `player_tab` ( _id ,_person_ , _weight_player ,_height_player  , _post_player , _state_player ) '+ values;
            console.log(query);
/////      SEND THE REQUEST IN TH PLAYER_TAB   /////////////
            simpleRequest(query , 'setPlayerInformation');
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

 
module.exports ={ PLAYER};