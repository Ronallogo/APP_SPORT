const connectDB = require("../../config/db.js");
const { editInformationPerson } = require("../../person/controllers/app.person.function.js");
const { valueReturned, simpleRequest } = require("../../tools_functions/app.tools.fonctions.js");



//////    ***FONCTION POUR RECUPERER TOUTES LES INFORMATION COMBINÉES D' UN PLAYER ***      ///////
module.exports.getInformationPlayer = async (info_player) =>{
    /////////  PREMIERE PARTIE DE LA  REQUETE   /////////
    let querie = "SELECT person_tab._person_name , person_tab._nation_person , player_tab._weight_player , player_tab._height_player , player_tab._post_player , player_tab._state_player FROM `person_tab` ";
    
    
    /**
     * verification du type de info player
     * definition de la seconde partie de la requete
     * constitution de la requete entiere (querie +=  inner....)
     */
   // console.log(info_player);
    try {
    //// CETTE SYNTAXE PERMET DE DECLENCHER L ERREUR EN CAS DE VALEUR NON NUMBER 
        try {
            if(typeof JSON.parse(info_player) == 'number'){

                const innerJoinForId = "INNER JOIN `player_tab` ON player_tab._person_ = person_tab._id AND person_tab._id =  " + `${info_player} ;`
                querie +=innerJoinForId  ;
            }
        } catch (error) {
            
            const innerJoinForName =  "INNER JOIN `player_tab` ON player_tab._person_ = person_tab._id AND person_tab._person_name =  " + `'${info_player.toUpperCase()}' ;`
            querie += innerJoinForName;
        } 
       // console.log(querie);

        ////   ***RECUPERATION DE LA REQUETE *** //////
        const result = await valueReturned(querie);
        
        ///console.log(result[0]);
         /////   ***EXTRACTION DES INFORMATION DU RESULTAT DE LA REQUETE*** ///
        try {
            const objectReleased = {
                name : result[0]._person_name,
                nation : result[0]._nation_person,
                weight : result[0]._weight_player ,
                height : result[0]._height_player,
                post : result[0]._post_player ,
                state : result[0]._state_player
        
            }
            return objectReleased ;
        } catch (error) {
            console.log(error);
            console.log("\n CAUSE : PLAYER_NOT_FOUND");
        }
    
    
    } catch (error) {
        console.log(error);
    }
    
   
    

}

/**
 * 
 * @param {*} person_id 
 * @param {String} new_info_player 
 * @param {String} name_info 
 */
module.exports.editInformationPlayer = async (person_id  , new_info_player , name_info) =>{
    Number(person_id);
    console.log('inside_2');
    let queries = '';
     
    const typeInformationSet_1 = {name :'name' , birth :'birth' ,nation : 'nation'};
    const typeInformationSet_2 = {height : 'height' , weight : 'weight' , post :'post' ,state : 'state'}
    
    
  //  console.log(name_info in typeInformationSet_1);
  //  console.log(name_info in typeInformationSet_2);
  // console.log(person_id  , new_info_player , name_info);

    
    if(name_info in typeInformationSet_1){
        
        editInformationPerson(person_id , new_info_player , name_info);
    }
    else if(name_info in typeInformationSet_2){
        console.log('inside_4');
        switch (name_info) {

            case "height":
                queries = "UPDATE  `player_tab` SET player_tab._height_player =  "+`'${new_info_player}' WHERE player_tab._person_ = ${person_id}`;
                break;
    
            case 'weight':
                
                queries = "UPDATE  `player_tab` SET player_tab._weight_player =  "+`'${new_info_player}' WHERE player_tab._person_ = '${person_id}'  `;
                
                break;
    
            case "post":
                queries = "UPDATE  `player_tab` SET player_tab._post_player =  "+`'${new_info_player}' WHERE player_tab._person_ = '${person_id}'  `;

                break;
            
            case "state":
                queries = "UPDATE  `player_tab` SET player_tab._state_player =  "+`'${new_info_player}' WHERE player_tab._person_ = '${person_id}'  `;

                break;
            default:
                console.log('WRONG_KEY_TO_PLAYER');
                break;
        }
    
        console.log(queries);
        await simpleRequest(queries , 'editInformationPerson')
        
        
        
    }


}






