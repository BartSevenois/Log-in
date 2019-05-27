module.exports = function (app) {

  var userController = require('./../controllers/user.controller');
  var passport = require('./../config/auth.config')
  app.get('/', userController.renderLogin);

  app.get('/profile', isAuthenticated, userController.renderProfile);

  app.get('/register', userController.renderRegistration);

  app.post('/register', userController.register);

  // app.post("/signin", passport.authenticate('local', {
  //     successRedirect: '/profile',
  //     failureRedirect: '/',
  //     failureFlash: true
  // }), userController.renderLogin);

  app.post('/signin', function (req, res, next) {

    if (req.body.username === '' && req.body.password === '') {
      res.json({msg: 'A username and a password are required to log in!'})
    }

    if (req.body.username === '') {
      res.json({msg: 'A username is required to log in!'})
    }

    if (req.body.password === '') {
      res.json({msg: 'A passsword is required to log in!'})
    }

    next()
  },function(req, res, next) {
    passport.authenticate('local', function(status, err, user) {
      console.log(status)
      if (status === null) {
        res.json({
          msg: err
        });
      } else {
        res.json({
          msg: true
        });
      }

    })(req, res, next)
  })

  function isAuthenticated(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/');
  }
}
