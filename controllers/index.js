const router = require('express').Router()
const api = require('./api')
 const homeRoutes = require('./home-routes')
 const htmlRoutes = require('./html-routes')

router.use('/api', api)
 router.use('/', homeRoutes)
 router.use('/', homeRoutes)




module.exports = router;