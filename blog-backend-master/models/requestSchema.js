const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    name : String ,
    username : String,
    isApproved : {
        type : Boolean,
        default : false
    },
    request : String ,
    domain : String,
    link : String,
    college : String 
})

const request = new mongoose.model('request',requestSchema);

module.exports = request;