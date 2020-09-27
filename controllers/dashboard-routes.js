const router = require('express').Router();


router.get('/dashboard', (req, res) => {
    
        res.render('../views/layouts/dashboard.handlebars');
    })
        // .catch(err => {
        //     console.log(err);
        //     res.status(500).json(err);
       // });
       


       
module.exports = router;