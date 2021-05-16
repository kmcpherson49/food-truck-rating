const router = require('express').Router();
const { Truck } = require('../models');

// route to home page
router.get('/', (req, res) => {
    res.render('homepage');
  });

// route to login page
router.get('/login', (req, res) => {
<<<<<<< HEAD
=======
  // if(req.session.loggedin){
  //   res.redirect("/")
  //   return;
  // }
>>>>>>> develop2
    res.render('login');
  });

// route to sign up page
  router.get('/signup', (req, res) => {
<<<<<<< HEAD
    res.render('signup');
=======
    // if(!req.session.loggedin){
    //   res.redirect("/signup")
    // }
   //res.render('/');
   res.render('signup')
>>>>>>> develop2
  });

// route to all foodtruck page
router.get('/alltrucks', (req, res) => {
    Truck.findAll({
        attributes: [
            'name',
            'category',
            'website',
            'email',
            'phone'
        ]
    })
    .then(trucks => {
        res.render('alltrucks', {trucks});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
  });

<<<<<<< HEAD
=======
// add route to search for truck by name including Post, if nothing show error
router.get('/search', (req, res) => {
    Truck.findOne({
        where: {
            truck_name: req.body.truck_name
        }
    })
    .then(userSearch => {
        if (!userSearch) {
            res.status(404).json({ message: 'No truck found with that name' });
            return;
        }
        res.render('/search')
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// route to input a review, submit button needs to be connected to route comment below
router.get('/review', (req, res) => {
    res.render('review');
  });
// route to submit button on reviews.handlebars to ad reviews to a truck
// router.post()

>>>>>>> develop2
  module.exports = router;
