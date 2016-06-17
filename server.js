/*eslint no-console:0 */
'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app= express();
const mongoose=require('mongoose');

const Team=require('./backend/models/Team');

const db=mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log('connected to mongod server');
});
mongoose.connect('mongodb://localhost/afm');

app.use(bodyParser.json());

app.get('/src/styles/:resource', function(req,res){
  res.sendFile(path.join(__dirname,'src','styles',req.params.resource));
});

/*
  client resource
 */
app.get('/dist/:resource', function(req,res){
  console.log('ASSET');
  res.sendFile(path.join(__dirname,'dist',req.params.resource));
});


/*
  FIND TEAM
app.get('/team/:team_id', function(req,res){
  console.log('[GET][TEAM_BY_ID]');
  Team.find({id:req.params.team_id},function(err,teams){
    if(err){
      return res.status(500).json({error:err});
    }
    res.json(teams);
  });
});
*/


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
  console.log('[REQUEST][ALL_TEAM]');
  Team.find({_id: req.params.team_id}, function(err,teams){
    if(err){
      return res.status(500).json({error:'error!'});
    }
    console.log('[REQUEST][ALL_TEAM] :'+teams);
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

app.get('*', function (req, res) {
  console.log('REQUEST');
  res.sendFile(path.join(__dirname, 'src','index.html'));
});

app.listen(8888, function(){
  console.log('listening ...');
});
