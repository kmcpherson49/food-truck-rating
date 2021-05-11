const router = require('express').Router();

// route to home page
router.get('/', (req, res) => {
    res.render('homepage');
  });

// route to login page when clicked on nav
router.get('/login', (req, res) => {
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

// *for Krista* add route to search for truck by name including Post, if nothing show error

// route to input a review, submit button needs to be connected to route comment below
router.get('/review', (req, res) => {
    res.render('review');
  });
// route to submit button on reviews.handlebars to ad reviews to a truck

  module.exports = router;
