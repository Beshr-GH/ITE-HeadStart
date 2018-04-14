var express = require('express');
var bodyParser = require('body-parser');
var Projects = require('../models/projectModel.js')
var Profiles = require('../models/ProfileModel.js')
var mongoose = require('mongoose'),
assert = require('assert'); 
var Schema = mongoose.Schema;
var profileRouter = express.Router();
profileRouter.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;

var db = mongoose.connection; 

/* GET home page. */

profileRouter.route('/')
.get(function(req, res, next) {
    console.log('profileRouter');
    Profiles.find({}).sort('_id').exec(function(err,result){
        if (err) throw err;
        console.log(result);
        res.json(result);
        
    });
    
})

.post(function (req, res, next) { 
    console.log('post is posted');
    var profile = new Profiles (
        {
            Name : req.body.name,
            Phone : req.body.phone,
            Email : req.body.email,
            Address : req.body.address,
            Additional_Info:req.body.info,
            
            _id: new mongoose.Types.ObjectId()
        });
        
    console.log('Created Profile'); 
    console.log(profile);
    profile.save(function (err){
        if (err) throw err;
        res.json('added the newProfile \n' + profile);
    });

})

.delete(function(req,res,next) {
    console.log('delete was choosed');
    Profiles.remove({"Name":req.body.name}, function(err, result){
        if (err) throw err;
        assert.equal(err, null); 
        console.log("Removed the Profile " + req.body.name);
        res.json('Deleted the Profile' + req.body.name)
    })

});
profileRouter.route('/:student')
.get(function(req ,res,next){
    Profiles.findOne({'Name':req.params.student},function(err,result){
        if (err) throw err;
        console.log("find parameter is " + req.params.student)
        console.log(result);
        res.json(result);
    })
});
/*db.dropCollection("hobbies", function(err, result){ 
    assert.equal(err,null); 
    
 });*/


module.exports = profileRouter;