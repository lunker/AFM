'use strict';

const express = require('express');
const session=require('express-session');
const bodyParser=require('body-parser');
const app = express();
const mongoose=require('mongoose');
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/User.js');

const db=mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log('connected to mongod server');
});
mongoose.connect('mongodb://localhost/afm');


app.use(session({
  secret: 'keyboard cat'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

/*
  로그인 인증
 */
passport.use(new LocalStrategy({
  usernameField: 'id',
  passwordField: 'password'
  },
  function(id, password, done) {
    User.findOne({ id: id }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      console.log(user);
      return done(null, user, {result: '1'});
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});



/*
  회원가입
 */
app.post('/signup', function(req,res){
  const id=req.body.id;
  const password=req.body.password;

  const user = new User();
  user.id=id;
  user.password=password;
  console.log(user);
  user.save(function(err){
    if(err){
      console.error(err);
      res.json({result:0});
      return;
    }
    res.json({result:1});
  });
});

app.post('/login',
          passport.authenticate('local'),
        function(req,res){
          res.json({result:'1'});
        });



module.exports=app;
