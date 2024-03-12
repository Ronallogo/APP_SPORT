const connectDB = require("../../config/db.js");
const { simpleRequest } = require("../../tools_functions/app.tools.fonctions.js");

/**
 * 
 * @param {string} info 
 */
module.exports.getInformationPerson = async  (info) =>{
    
    
    const queries =  "SELECT  * FROM `person_tab` WHERE person_tab._person_name =  "+`'${info}'`;        
    await simpleRequest(queries , 'getInformationPerson');

        
};
/**
 * 
 * @param {number} person_id
 * @param {string} new_info_person 
 * @param {string} type_info
 */

module.exports.editInformationPerson = async (person_id , new_info_person , name_info) =>{
    try {
        console.log('inside_3');
        let queries = '';
        
        switch (name_info) {

            case "name":
                queries = "UPDATE  `person_tab` SET person_tab._person_name =  "+`'${new_info_person}' WHERE person_tab._id = ${person_id}`;
                break;

            case 'birth':
                
                let natureDateVerify = new Date(new_info_person);
            

                if (natureDateVerify instanceof Date){

                    queries = "UPDATE  `person_tab` SET person_tab._birth_person =  "+`'${new_info_person}' WHERE person_tab._id = '${person_id}'  `;
                }
                else {
                    console.log('INVALID_DATE');
                }
                break;

            case "nation":
                queries = "UPDATE  `person_tab` SET person_tab._nation_person =  "+`'${new_info_person}' WHERE person_tab._id = '${person_id}'  `;

                break;
        
            default:
                console.log('WRONG_KEY');
                break;
        }

        
        simpleRequest(queries , 'editInformationPerson');
    } catch (error) {
        console.log(error);
    }


}

