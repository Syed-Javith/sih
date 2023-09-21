const express = require('express');
const blog = require('../models/blogsModel');


const router = express.Router();


router.get('/blog/', async (req, res) => {
    await blog.find({})
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(err);
            res.status(400).send(err);
        });
})

router.post('/blog/:userid/:blogTitle', async (req, res) => {
    const newBlog = new blog({
        userid: req.params.userid,
        blogTitle: req.params.blogTitle,
        blogBody: req.body.blogBody,
        blogLink : req.body.blogLink,
        blogTags : req.body.blogTags.split(" ")
    })

    await newBlog.save()
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
})


router.patch('/blog/:userid/:blogTitle', async (req, res) => {
    console.log(req.body);
    console.log(req.params);
    const newBlogBody = req.body.blogBody;
    const newBlogTitle = req.body.blogTitle;
    const newBlogLink = req.body.blogLink;
    const newBlogTags = req.body.blogTags.split(" ");

    await blog.updateOne({
            userid: req.params.userid,
            blogTitle: req.params.blogTitle
        }, {
            $set: {
                blogTitle: newBlogTitle,
                blogBody: newBlogBody,
                blogLink : newBlogLink,
                blogTags : newBlogTags
            }
        })
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });

});

router.delete('/blog/:userid/:blogTitle', (req, res) => {
    console.log(req.body);
    console.log(req.params);

    blog.deleteOne({
            userid: req.params.userid,
            blogTitle: req.params.blogTitle,
        })
        .then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });

})


module.exports = router;