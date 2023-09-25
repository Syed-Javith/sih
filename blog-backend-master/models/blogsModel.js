const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    userid : String ,
    blogTitle : String ,
    blogBody : String,
    blogLink : String,
    blogTags : [String],
    domain : String,
    college : String
});

const blog = new mongoose.model("blog",blogSchema);

module.exports = blog