const express = require('express');
const User = require('../models/userModel'); // Assuming 'userModel' is the correct path to your user model
const request = require('../models/requestSchema');

const router = express.Router();

router.get('/admin/req/:admin', async (req, res) => {
    const adminName = req.params.admin;

    try {
        const user = await User.findOne({ username: adminName });
        if (user) {
            res.send(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/admin/req/:admin/:user/:project', async (req, res) => {
    const admin = req.params.admin;
    const userName = req.params.user;
    const project = req.params.project;
    console.log(project);

    try {
        // Perform your database operations here using the User model
        // For example:
           await User.updateOne({
        "requests.name" : project
        }, {
            $set :{
                "requests.$.isApproved" : true
            }
        })
    .then((result) => {
        console.log(result);
        res.send(result)
    }).catch((err) => {
        console.log(err);
    });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


router.post('/admin/user/req', (req,res)=>{
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
