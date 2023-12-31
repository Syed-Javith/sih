const cors = require('cors');   

const corsMiddleware = cors({
    origin : "http://localhost:3000",
    methods : ['GET' , 'POST' , 'PATCH' , 'DELETE'],
    credentials : true,
    allowedHeaders : ['Content-Type','Authorization']
})

module.exports = corsMiddleware;