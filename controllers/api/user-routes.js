const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('todo get all users')
})

module.exports = router;