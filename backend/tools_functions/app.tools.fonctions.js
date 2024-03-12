const connectDB = require("../config/db");


///////  ***FUNCTION PERMETTANT DE RECUPERER DE DONNÉES DE PUIS LA BASE DE DONNÉES AVEC LE SYSTELME DES PROMESSE*** //////
module.exports.valueReturned = async (queries) =>{

    const rows = new Promise((relsove , reject) =>{
        connectDB.query(queries , (err , rows)=>{
            if(err){
                console.log('THIS IS THE ERROR_ :' + err);
                reject(err) ;
            }
            else{
                console.log(rows);
                relsove(rows); 
               
                 
            }
        });

    });

    return rows;

}


///////       ***FONCTION PERMETTANT DES REQUETE INSERT ET UPDATE DANS LA BASE DE DONNÉES***  //////////////

module.exports.simpleRequest = (queries , caller_function_name)=>{
    connectDB.query(queries, (err , rows)=>{
        if(err){
            console.log('THIS IS THE ERROR_ :' + err);
            return ;
        }
        else{
            console.log(rows);
            console.log(`QUERY_(${caller_function_name})_SUCCEEEDED!!!!`);
            return rows ;
        }
    });

}