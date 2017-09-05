const passport      = require('passport'),
FacebookStrategy    = require('passport-facebook').Strategy;
const User          = require('../models/user');
const session       = require('express-session');
const config        = require('../config/database');
const jwt           = require('jsonwebtoken');
const appConfigs    = require('../config/configs');
const ls            = require('local-storage');

module.exports = function(app, passport) {

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(session({ secret: config.secret, resave: false, saveUninitialized: true, cookie: { secure: false } }));

  passport.serializeUser(function(user, done) {
    token = jwt.sign({ username: user.username, email: user.email }, config.secret, { expiresIn: '24h' });
    done(null, user);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new FacebookStrategy({
    clientID:     appConfigs.fbClientID,
    clientSecret: appConfigs.fbClientSecret,
    callbackURL:  appConfigs.fbCallbackURL,
    profileFields: appConfigs.fbProfileField,
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({ 'fb_id': profile.id }, function(err, user) {
        if(err) return done(err);

        if(!user) {
            user = new User({
                fb_id: profile.id,
                password: '#Username11',
                username: profile.username ? profile.username : profile.displayName.toLowerCase().replace(/\s+/g, '_'),
                email: profile.emails[0].value,
                name: profile.displayName
            });
            user.save(function(err) {
                if (err) console.log(err);
                return done(err, user);
            });
        }
        //found user. Return
        else return done(err, user);
    });
  }
));


app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function (req, res) {
    ls.set('token', token);
    res.cookie('token', token);
    res.redirect('/home');
});


  return passport;
}
