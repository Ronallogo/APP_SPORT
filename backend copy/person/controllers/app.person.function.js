const connectDB = require("../../config/db.js");

/**
 * 
 * @param {string} info 
 */
module.exports.getInformationPerson = async  (info) =>{
    
    const queries =  "SELECT  * FROM `person_tab` WHERE person_tab._person_name =  "+`'${info}'`;
        /**
         * param {ma requete et le callback en cas d erreur}
         *  */         
        await connectDB.query(queries , (err , rows)=>{
            if(err){
                console.log('THIS IS THE ERROR_ :' + err);
                return ;
            }
            else{
                console.log(rows);
                console.log('QUERY_SUCCEEEDED!!!!');
                return rows ;
            }
        });

        
};
/**
 * 
 * @param {number} person_id
 * @param {string} new_info_person 
 * @param {string} type_info
 */

module.exports.editInformationPerson = async (person_id , new_info_person , type_info) =>{
    let queries = '';
    console.log(type_info);
    switch (type_info) {

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

    
    await connectDB.query(queries , (err , rows)=>{
        if(err){
            console.log('THIS IS THE ERROR_ :' + err);
            return ;
        }
        else{
            console.log(rows);
            console.log('QUERY_SUCCEEEDED!!!!');
            return rows ;
        }
    }); 


}