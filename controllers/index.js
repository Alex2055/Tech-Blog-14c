const router = require('express').Router();

const homeRoutes = require('./home-routes.js');

const dashBoard = require('./dashboard-routes.js');

const userRoutes = require('./api/user-routes.js');

const postRoutes = require('./api/post-routes.js');

const commentRoutes = require('./api/comment-routes.js')

router.use('/', userRoutes);
router.use('/', homeRoutes);
router.use('/', dashBoard);
router.use('/', postRoutes);
router.use('/comments', commentRoutes)

module.exports = router;