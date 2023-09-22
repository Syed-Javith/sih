const express = require('express');

const router = express.Router();

const User = require('../../models/userModel'); 
const request = require('../../models/requestSchema');

router.post('/user/', (req,res)=>{
    const newRequest = new request({
        username : req.body.username,
        name : req.body.blogTitle ,
        isApproved : false ,
        request : req.body.blogBody,
        domain : req.body.domain ,
        link : req.body.blogLink,
        college : req.body.college
    })

    User.updateOne({ college : req.body.college , isAdmin : true },{ $push : { requests : newRequest } })
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });

})

module.exports = router;