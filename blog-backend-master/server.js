const express = require('express');

const app = express();

const connectToMongo = require('./db');

const bodyParserMiddleware = require('./middlewares/bodyParser');
const staticMiddleware = require('./middlewares/staticMiddleware');

const blogRoutes = require('./routes/blogRoutes');
const corsMiddleware = require('./middlewares/corsMiddleware');
const authenticateRoutes = require('./routes/authenticateRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(express.json());
app.use(staticMiddleware);
app.use(bodyParserMiddleware);
app.use(corsMiddleware);
connectToMongo(); 

app.use('/',blogRoutes);
app.use('/',authenticateRoutes);
app.use('/',adminRoutes);
// app.use('/admin/',adminRequestRoutes);

app.listen(5000,()=>{
    console.log("server started at 5000");
})