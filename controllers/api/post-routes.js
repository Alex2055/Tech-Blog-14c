const router = require('express').Router();
const {Comment, Post} = require('../../models');




router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
        id: req.params.id
    },
     include: [
         {
             model: Comment,
 attributes:['id']
            }
        ]
}).then(dbPost => {
        
        
        const post = dbPost.get();
        console.log(post.Comments);
        res.render('comment', post );
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});





module.exports = router;