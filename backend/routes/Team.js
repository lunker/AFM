
/*eslint no-console:0 */
'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app= express();
const mongoose=require('mongoose');

const Team=require('../models/Team');

const db=mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log('connected to mongod server');
});
mongoose.connect('mongodb://localhost/afm');

app.use(bodyParser.json());

/*
  FIND ALL TEAM
 */
app.get('/teams', function(req,res){
  console.log('[REQUEST][ALL_TEAM]');
  Team.find(function(err,teams){
    if(err){
      return res.status(500).json({error:'error!'});
    }
    console.log('[REQUEST][ALL_TEAM] :'+teams);
    res.json(teams);
  });
});

/*
  FIND TEAM BY ID
 */
app.get('/teams/:team_id', function(req,res){
  console.log('[REQUEST][TEAM_BY_ID]');
  Team.find({_id: req.params.team_id}, function(err,teams){
    if(err){
      return res.status(500).json({error:'error!'});
    }
    res.json(teams);
  });
});

/*
  FIND TEAM BY NAME
 */
app.get('/teams/name/:team_name', function(req,res){
  console.log('[REQUEST][TEAM_BY_NAME]');
  console.log('[REQUEST][TEAM_BY_NAME] params : ' + req.params.team_name);
  const query='/'+req.params.team_name+'/';
  console.log('query ; ' + query);


  Team.find({'name': new RegExp(req.params.team_name)}, function(err,teams){
    if(err){
      return res.status(500).json({error:'error!'});
    }
    console.log(teams);
    res.json(teams);
  });
});

/*
  MAKE NEW TEAM
 */
app.post('/team/newteam', function(req,res){
  console.log('[REQUEST][TEAM][MAKE NEW TEAM]');
  var team=new Team();
  team.name=req.body.name;
  team.description=req.body.description;
  console.log('[REQUEST][TEAM][MAKE NEW TEAM] : '+team);
  team.save(function(err){
    if(err){
      console.error(err);
      res.json({result:0});
      return;
    }
    res.json({result:1});
  });
});


module.exports=app;
