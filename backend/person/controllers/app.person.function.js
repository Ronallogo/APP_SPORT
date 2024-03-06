const connectDB = require("../../config/db.js");


module.exports.getInformationPerson = async  (info) =>{
    
    const queries = "SELECT  * FROM `person_tab` WHERE person_tab._person_name =  "+`'${info}'`;
        /**
         * param {ma requete et le callback en cas d erreur}
         *  */         
        connectDB.query(queries , (err , rows)=>{
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