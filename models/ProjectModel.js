var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectShcema = new Schema({
    _id: Schema.Types.ObjectId,
    Project_Name :{
        type:String,
        required: true
    },
    Year : { 
        type :Number,
        required: true 
    },
    Category : {
        type : String
    },
    tags : [{type : String}],
    Supervisor : {
        type : String 

    },
    PYear :{
        type : Number
    },
    Details : {
        type : String
    },
    Image : {
        type: String
    },
    Members: [{type : String}],
    Email:{
        type : String
    }

})

const Project = mongoose.model('Projects', ProjectShcema);
module.exports = Project; 