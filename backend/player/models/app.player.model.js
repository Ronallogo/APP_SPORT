const connectDB = require("../../config/db.js");
const appModel = require('../../person/model/app.person.model.js');
const { simpleRequest, searchId , searchAllId, ifIdExist } = require("../../tools_functions/app.tools.fonctions.js");

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
     * @param {number} team
     */
    constructor(name , birth , nation , weight , height , team , state , post) {
        super();
        this._name = name;
        this._birthday = birth;
        this._nationality = nation;
        this._weight = weight;
        this._height = height ;
        this._post = post;
        this._state = state || 'GOOD';
        this._team = team
        
    }
    async setPlayerInformation(){
//////////       AFTER CREATION OF THIS OBJECT THIS FONCTION SEND FIRST THE INFORMATION IN THE PERSON_TAB   ///////////
        try {
            this.setPersonInformation('player');
            /////          TAKE ID OF THIS PERSON AS FOREIGN_KEY
                        const _person_ = await this.getIdByNamePerson(this._name);
                       
            //////    VERIFIACTION IF THIS ID TEAM EXIST OR NOT
                        const TeamIdGathered = await searchAllId('team');
                        this._team =   ifIdExist(TeamIdGathered , this._team);
                        //console.log(this._team);
                         
                        
            /////         CUT THE REQUEST IN TWO PARTS ///////////////
            
                        const values  = `VALUES  (NULL ,'${_person_[0]._id}' , '${this._weight}' ,' ${this._height}' ,'${this._state}' ,'${this._post}'  , '${this._team}')` ;
                        const query = 'INSERT INTO `player_tab` ( _id ,_person_ , _weight_player ,_height_player  , _state_player  ,_post_player ,  _team_player) '+ values;
                        console.log(query);
            /////      SEND THE REQUEST IN TH PLAYER_TAB   /////////////
                        simpleRequest(query , 'setPlayerInformation');
        } catch (error) {
            console.log(error);
        }
     }

    
    
    
};

 
module.exports ={ PLAYER};