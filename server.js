var flash             = require('connect-flash');
var passport          = require('passport');


var sess              = require('express-session');
var Store             = require('express-session').Store;
var express           = require('express');
var BetterMemoryStore = require('session-memory-store')(sess);
var path              = require('path')
var app = express();
var bodyParser = require('body-parser')
var store = new BetterMemoryStore({ expires: 60 * 60 * 1000, debug: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(sess({
   name: 'JSESSION',
   secret: 'MYSECRETISVERYSECRET',
   store:  store,
   resave: true,
   saveUninitialized: true
}));
app.use(express.static('./app/public'));
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Routes
require('./app/routes/user.route')(app);

app.listen('3000');
