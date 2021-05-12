const path = require('path');
const auth = require('../config/middleware/authenticated');

module.exports = function(app){
    app.get('/signup', function(req, res){
        if(req.user){
            res.redirect('/')
        }
        res.sendFile(path.join(__dirname, '../views/signup.handlebars'))
    })

    app.get('/login', function(req, res){
        if(req.user){
            res.redirect('/members')
        }
        res.sendFile(path.join(__dirname, '../views/login.handlebars'))
    })

    app.get("/members", auth, function(req, res){
        res.sendFile(path.join(__dirname, '../views/homepage.handlebars'))
    })
}


