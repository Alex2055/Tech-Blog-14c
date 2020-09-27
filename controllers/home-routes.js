const router = require('express').Router();
const Post = require('../models/Post');



router.get('/home', (req, res) => {
    Post.findAll({}).then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get());
        res.render('homepage', { posts });
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    
    res.render('../views/login.handlebars');
})

router.get('/signup', (req, res) => {

    res.render('../views/signup.handlebars');
})


module.exports = router;