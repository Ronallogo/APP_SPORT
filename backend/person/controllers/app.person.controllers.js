const appModel = require('../model/app.person.model');
const connectDB = require("../../config/db.js");
const {getInformationPerson} = require('../controllers/app.person.function')

////                           REGISTER A PERSON          ////////////
module.exports.postPerson = async (req , res) => {
    if (req.body.name_person && req.body.birth_person && req.body.nation) {

             

            const person = new appModel.PERSON(req.body.name_person , req.body.birth_person, req.body.nation)
            person.setPersonInformation();
            res.status(200).json(JSON.stringify(person));
            delete person;
            
    }
    

        else{
            res.status(500).json({message :'ERROR_POST_PERSON'});
        }
    };
    
///////////////    GET THE NIFORMATION FROM THIS PERSON  ////////////////

module.exports.getPerson = async (req , res) =>{
        
    const data =  getInformationPerson(req.body.name_person);
    
    
    if(req.body.name_person){
         
        res.status(200).json(data);
    }
    else{
        res.status(500).json({message :`ERROR_GET_PERSON : contains : ${req.body.name_person} ${data}`});
    }
    
}
 