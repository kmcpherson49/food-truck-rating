const router = require('express').Router();
const { Truck } = require('../models');

// route to home page
router.get('/', (req, res) => {
    res.render('homepage');
  });

// route to login page when clicked on nav !
router.get('/login', (req, res) => {
//   if(req.session.logged_in){
//     res.redirect("/")
//     return;
//   }
    res.render('login');
  });

// route to sign up page !
  router.get('/signup', (req, res) => {
//     if(!req.session.logged_in){
//       res.redirect("/signup")
//     }
//    res.render('/');
   res.render('signup')
  });

// route to all foodtruck page
router.get('/alltrucks', (req, res) => {
    Truck.findAll({
        attributes: [
            'truck_name',
            'category',
            'website',
            'email',
            'phone'
        ]
    })
    .then(truckData => {
        res.render('alltrucks', truckData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
  });

// *for Krista* add route to search for truck by name including Post, if nothing show error
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

  module.exports = router;
