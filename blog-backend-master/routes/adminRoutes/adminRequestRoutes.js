const express = require('express'); 

const router = express.Router();

const User = require('../../models/userModel'); 

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



router.post('/request/:admin/:user/:project', async (req, res) => {
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
        res.send(result)
    }).catch((err) => {
        console.log(err);
    });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


router.patch('/request', async (req,res)=>{
    
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