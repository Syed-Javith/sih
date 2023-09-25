const express = require('express'); 

const router = express.Router();

const User = require('../../models/userModel'); 
const axios = require('axios');

router.get('/request/:admin', async (req, res) => {
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



router.patch('/request/approve/:project', async (req, res) => {
    const project = req.params.project;
    console.log(project);

    try {
           await User.updateOne({
        "requests.name" : project
        }, {
            $set :{
                "requests.$.isApproved" : true
            }
        })
    .then((result) => {
        console.log(result);
        const body = {
            userid: req.body.username,
            blogTitle: req.body.name,
            blogBody: req.body.request,
            blogLink : req.body.link,
            blogTags : req.body.tags,
            college : req.body.college
        }
        console.log(body);
        axios.post('http://localhost:5000/blog',body)
        .then((result) => {
            console.log("added post received");
            console.log(result);
            res.status(200).send({ message : "post added" })
        }).catch((err) => {
            res.status(400).send(err);
        });
    }).catch((err) => {
        console.log(err);
    });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


router.patch('/request/reject/', async (req,res)=>{
    
    const name = req.body.name;
    const college = req.body.college;
    const username = req.body.username;

    await User.updateOne({
        username : username ,
        college : college ,
        "requests.name" : name 
    } , {
        $pull : {
            requests : {
                name : name
            }
        }
    })
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(err)
    });

});


module.exports = router;