var crypto = require('crypto');
var User = require('./../models/user.model');
var formValidation = require('./../func/formValidation');
var passport = require('./../config/auth.config');
// Render login
module.exports.renderLogin = (req, res) => {
  res.render('login2', {
    'message' : req.flash('message') ,
    'username' : (req.query.username) ? req.query.username : '' ,
  });
}

// Render profile
module.exports.renderProfile = (req, res) => {
  res.send('Succes')
}

// Render registration
module.exports.renderRegistration = (req, res) => {
  res.render('register', {
    'firstName' : (req.query.firstName) ? req.query.firstName : '' ,
    'lastName' : (req.query.lastName) ? req.query.lastName : '' ,
    'email' : (req.query.email) ? req.query.email : '' ,
    'username' : (req.query.username) ? req.query.username : '' ,
    'err' : (req.query.err) ? req.query.err : ''
  })
}

//Register user
module.exports.register = (req, res) => {
  var user = req.body
    // Error variables
    , err = '* '

    , firstName = ''
    , lastName = ''
    , email = ''
    , username = '';

  if (!user.firstName) {
    err += 'First name is required';
    if (err != '')
      err += ', '
  } else if (!formValidation.isRealName(user.firstName)) {
    err += 'This is not a valid first name';
    if (err != '')
      err += ', '
  } else {
    firstName = user.firstName;
  }

  if (!user.lastName) {
    err += 'Last name is required';
    if (err != '')
      err += ', '
  } else if (!formValidation.isRealName(user.lastName)) {
    err += 'This is not a valid last name';
    if (err != '')
      err += ', '
  } else {
    lastName = user.lastName;
  }

  if (!user.email) {
    err += 'Email is required';
    if (err != '')
      err += ', '
  } else if (!formValidation.isEmail(user.email)) {
    err += 'This is not a valid email';
    if (err != '')
      err += ', '
  } else {
    email = user.email;
  }

  if (!user.username) {
    err += 'Username is required';
    if (err != '')
      err += ', '
  } else {
    username = user.username;
  }

  if (!user.password) {
    err += 'Password is required';
    if (err != '')
      err += ', '
  }

  if (!user.firstName || !user.lastName || !user.email || !user.username || !user.password) {
    res.json({msg: err})
  } else {
    var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';
    salt = salt+''+ req.body.password;
    var encPassword = crypto.createHash('sha1').update(salt).digest('hex');

    User.register(req.body.firstName, req.body.lastName, req.body.email, req.body.username, encPassword, function(err, result) {
      console.log('Controller: ' + err + 'oki')
      if (!err) {
        res.json({msg: false})
        console.log(result)
      } else {
        res.json({msg: 'Error '})
      }
    })
  }



}

module.exports.login = (req, res) => {
passport.authenticate('local', function(err, pis, kak) {
  console.log(err)
  console.log(pis)
  console.log(err)
  res.send('ok')
})
}
