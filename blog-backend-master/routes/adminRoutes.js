const express = require('express');
const User = require('../models/userModel'); 
const request = require('../models/requestSchema');
const adminRequestRoutes = require('./adminRoutes/adminRequestRoutes');
const adminUserRoutes = require('./adminRoutes/adminUserRoutes');

const router = express.Router();

router.use('/admin/',adminRequestRoutes);
router.use('/admin/',adminUserRoutes);


module.exports = router;
