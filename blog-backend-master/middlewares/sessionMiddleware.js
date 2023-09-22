const expressSession = require('express-session');
const crypto = require('crypto');

const secretKey = crypto.randomBytes(32).toString('hex');
const sessionMiddleware = expressSession({
    secret: secretKey, 
    resave: false,            
    saveUninitialized: true,   
    cookie: {
      secure: false,          
      maxAge: 3600000,        
    },
})

module.exports = sessionMiddleware;