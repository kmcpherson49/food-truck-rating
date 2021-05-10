// route to login page
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