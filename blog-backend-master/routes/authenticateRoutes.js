const express = require('express'); 
const user = require('../models/userModel');

const router = express.Router();

router.post('/auth/login',(req,res)=>{
    const {username , password} = req.body;

    console.log(username + " " + password);

    user.findOne({ username : username , password : password } )
    .then((result) => {
        const user = result;
        console.log(result);
        if(user === null ){
            console.log("not");
            res.status(401).send({ message : "user not found" , isUserFound : false })
        }else{
            console.log("logged");
            user.loggedIn = true;
            req.session.user = user;
            console.log(user);
            res.send(user);
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

    user.findOne({ username : username , password : password } )
    .then((result) => {
        const user = result;
        if(user === null ){
            newUser.save()
            .then((result) => {
                result.isRegistered = true ;
                const data = result.data;
                res.send(data);
            }).catch((err) => {
                console.log(err);
                res.status(401).send(err);
            });
        }else{
            res.send({result , UserAlreadyFound : true});
        }
    }).catch((err) => {
        res.status(401).send(err);
    });

   
});

router.post('/auth/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log("trouble logging out");
        }
        res.send({message : "logged out successfully"});
    });
});

router.get('/auth/user',(req,res)=>{
    if (req.session.user) {
        res.status(401).json({ message: 'Unauthorized' });
      } else {
        res.json({ user: req.session.user });
      }
})

module.exports = router ;