
var passport          = require('passport')
  , LocalStrategy     = require('passport-local').Strategy
  , crypto            = require('crypto')
  , passport          = require('passport')

  , connection        = require('./db.config')
  , User              = require('./../models/user.model')

passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true //passback entire req to call back
} , function (req, username, password, done){
      var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';

      User.getUserByUsername(username, function(err, user) {
        if (err) return done(null, err, null);

        if(!user.length){ return done(null, 'Invalid username or password.', null); }
        salt = salt+''+password;

        var encPassword = crypto.createHash('sha1').update(salt).digest('hex');
        var dbPassword  = user[0].pwd;

        if(!(dbPassword == encPassword)){
          console.log('password error')
            return done(null, 'Invalid username or password.', null);
         }
         console.log('ffff')
        return done(true, null, user[0]);
      })

    }
));

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    connection.query("select * from users where id = "+ id, function (err, rows){
        done(err, rows[0]);
    });
});

module.exports = passport;
