const router = require('express').Router();
const { User, Truck } = require('../models');
const User = require('../models')

// route to login page
router.get('/', (req, res) => {
    console.log(req);
    console.log(res);
    res.render('login');
  });

// route to sign up page
  router.get('/signup', (req, res) => {
    res.render('signup');
  });

// route to all foodtruck page
router.get('/alltrucks', (req, res) => {
    res.render('alltrucks');
  });

  module.exports = router;