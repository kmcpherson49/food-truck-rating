const router = require('express').Router();
const commentRoutes = require('./comment_routes');
const postRoutes = require('./post_routes');
const userRoutes = require('./user_routes');

router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;