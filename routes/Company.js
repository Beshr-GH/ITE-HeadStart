var express = require('express');
var bodyParser = require('body-parser');
var Projects = require('../models/projectModel.js')
var Companies = require('../models/CompanyModel.js')
var mongoose = require('mongoose'),
assert = require('assert'); 
var Schema = mongoose.Schema;
var companyRouter = express.Router();
companyRouter.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;

var db = mongoose.connection; 

/* GET home page. */

companyRouter.route('/')
.get(function(req, res, next) {
    console.log('companyRouter');
    Companies.find({}).sort('_id').exec(function(err,result){
        if (err) throw err;
        console.log(result);
        res.json(result);
        
    });
    
})

.post(function (req, res, next) { 
    console.log('post is posted');
    var company = new Companies (
        {
            Name : req.body.name,
            Country : req.body.country,
            City : req.body.city,
            Company_Name: req.body.com_name,
            commercial_Register : req.body.comm_reg,
            Phone : req.body.phone,
            Email : req.body.email,
            Website : req.body.website,
            Additional_Info:req.body.info,
            Sponsership : req.body.sponsership,
            Discussing_Attendence : req.body.disc_atten,
            Incubation : req.body.incubation,
            _id: new mongoose.Types.ObjectId()
        });
        
    console.log('Created Company'); 
    console.log(company);
    company.save(function (err){
        if (err) throw err;
        res.json(company);
    });

})

.delete(function(req,res,next) {
    console.log('delete was choosed');
    Companies.remove({"Company_Name":req.body.com_name}, function(err, result){
        if (err) throw err;
        assert.equal(err, null); 
        console.log("Removed the Company " + req.body.com_name);
        res.json('Deleted the Company' + req.body.com_name)
    })

});



module.exports = companyRouter;