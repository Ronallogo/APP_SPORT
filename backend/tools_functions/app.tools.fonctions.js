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

module.exports.searchId = async (tabName , lineIndexed ) =>{
    const querie = `SELECT ${tabName}._id FROM  '${tabName}' WHERE  ${tabName}._id = '${lineIndexed}'`;
    return await this.valueReturned(querie);

}

module.exports.searchAllId = async (tableName) => {
    const querie = `SELECT ${tableName}._id FROM ${tableName}`;
    return await this.valueReturned(querie);
}

/**
 * 
 * @param {string} info 
 * @param {object} Column 
 */
module.exports.setColumn = (info , Column)=>{
    for (const key in Column) {
        if (Column[key] == info) {
            return Column[key];
            
        }
    }
}

module.exports.ifIdExist =  (gatherId , IdToCheck) =>{
    var result ;
    for (let index = 0; index < gatherId.length; index++) {
        if(gatherId[index]._id == JSON.parse(IdToCheck)){
            console.log(gatherId[index]._id );
            result = gatherId[index]._id ;
        }
        
    }
    return (result != undefined)? result : "id_not_exist";  
} 

module.exports.ifElementisIn =   (object , element)=>{
    var result;
    for (const key in object) {
        if ( element == object[key]) {
            result = true; 
        }
    }
  
    return  (result)? element  : null;
}