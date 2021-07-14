const moment = require('moment')
const mongoose = require('mongoose');
const UserDetails = require('../model/user.model.js')
 
 
exports.createUser = async function (req, res) {
    
    var userExists = await UserDetails.findOne({
        email: req.body.email
    })
    if (userExists) {
        res.status(400).send({
            message: 'User Email already exists, please try with different email. '
        })
    }
    else {
        var imageUrl ='http://localhost:5000/' + req.file.filename 
        
        let user = new UserDetails({
            
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email:req.body.email,
          phoneNumber:req.body.phoneNumber,
          profileImage :imageUrl
        })
        
        let userCreated = await UserDetails.create(user)
        res.status(200).send(userCreated)
    }
}
 
 
exports.update = async function (req, res) {
    var userExists = await UserDetails.findOne({
        email: req.body.email
    })
    console.log(req.body);
    console.log("User exists "+ userExists)
    if(req.file){
        var imageUrl ='http://localhost:5000/' + req.file.filename
        req.body.imageUrl = imageUrl
    }
    var Obj_id=mongoose.Types.ObjectId(req.body._id);
    if (userExists) {
        if(userExists._id !== Obj_id){

            res.status(400).send({
                message: 'User already exists..'
            }) 
        }
        else{
            
            var updatedUser = await UserDetails.findOneAndUpdate(req.body._id, { $set: req.body }, { new: true })
            res.status(200).send(updatedUser);
        }
    }
    else{
        var updatedUser = await updatedUser.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true })
        res.status(200).send(updatedUser);
    }
 
}
 
exports.get = async function (req, res) {
    console.log("Get Records")
    var allUser = await UserDetails.find();
    console.log(allUser)
    res.send(allUser)
}
 
exports.delete = async function (req, res) {
    await UserDetails.findByIdAndDelete(req.params.id)
}
 
 
exports.getById = async function(req, res){
    var user = await UserDetails.findById(req.params.id)
    res.send(user);
}
 
exports.getByName = async function(req, res){
    debugger;
    console.log("value.."+req.body.name);
    var user = await UserDetails.findOne({
        name: req.body.name
    })
 
    res.send(user);
}


