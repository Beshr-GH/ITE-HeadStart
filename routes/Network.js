var express = require('express');
var bodyParser = require('body-parser');
var Projects = require('../models/projectModel.js')
var mongoose = require('mongoose'),
assert = require('assert'); 
var Schema = mongoose.Schema;
var networkRouter = express.Router();
networkRouter.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;

var db = mongoose.connection; 

/* GET home page. */

networkRouter.route('/')
.get(function (req, res, next) { 
    console.log('get is getted');

    Projects.find({'Category' : "Network"},function(err,result){
        if (err) throw err;
        console.log(result);
        res.json(result);
        
    });
    
    })

.post(function (req, res, next) { 
    console.log('post is posted');
    var Project = new Projects (
        {
            Project_Name: req.body.name,
            Year : req.body.year,
            PYear : 2018,
            Details: req.body.details,
            Email : req.body.email,
            Supervisor : req.body.supervisor,
            Category : "Network",
            Image : "Projects.png",
            _id: new mongoose.Types.ObjectId()
        });
        for ( var i in req.body.members )
        Project.Members.push(req.body.members[i]);
        for ( var j in req.body.tags )
        Project.Members.push(req.body.tags[i]);

    console.log('Created Project');
    console.log(Project);
    Project.save(function (err){
        if (err) throw err;
        res.json('added the newProject \n' + Project);
    });
    

})

.delete(function(req,res,next) {
    console.log('delete was choosed');
    Projects.remove({"Project_Name":req.body.name}, function(err, result){
        if (err) throw err;
        assert.equal(err, null); 
        console.log("Removed the Project " + req.body.name);
        res.json('Deleted the Project' + req.body.name)
    })

});
networkRouter.route('/year/:Year')
.get(function (req, res, next) { 
    console.log('Swaerching by Year' , req.params.Year);

    Projects.find({'Year' : req.params.Year},function(err,result){
        if (err) throw err;
        console.log(result);
        res.json(result);
        
    });
    
    });

module.exports = networkRouter;