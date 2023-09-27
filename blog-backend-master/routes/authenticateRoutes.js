const express = require('express'); 
const jwt = require('jsonwebtoken');
const user = require('../models/userModel');

const router = express.Router();

router.post('/auth/login',(req,res)=>{
    const {username , password} = req.body;

    console.log(username + " " + password);

    user.findOne({ username : username  } )
    .then((result) => {
        console.log(result);
        if(result.password === password){
            console.log(password);
            const token = jwt.sign( {
                username : username,
                isAdmin :  result.isAdmin
            } , "MY_KEY" , {
                expiresIn : '1h'
            });

            res.status(200).send(
                {
                    token,
                     user : { 
                        username : username , 
                        isAdmin : result.isAdmin,
                        college : result.college
                    }
                }
            );
        }
    }).catch((err) => {
        res.status(401).send(err);
    });
});

router.post('/auth/register',(req,res)=>{
    const {username , password , isAdmin , college} = req.body;



    const newUser = new user({
        username : username , 
        password : password,
        isAdmin : isAdmin,
        college : college
    });
            newUser.save()
            .then((result) => {
                result.isRegistered = true ;
                const data = result.data;
                res.send(data);
            }).catch((err) => {
                console.log(err);
                res.send(err);
            });

   
});

router.post('/auth/logout',(req,res)=>{
    // req.session.destroy((err)=>{
    //     if(err){
    //         console.log("trouble logging out");
    //     }
        res.status(200).send({message : "logged out successfully"});
    // });
});

router.get('/auth/user',(req,res)=>{
    if (!req.session.user) {
        res.status(401).json({ message: 'Unauthorized' });
      } else {
        res.json({ user: req.session.user });
      }
})

module.exports = router ;