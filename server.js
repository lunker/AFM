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
mongoose.connect('mongodb://localhost/');

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

app.get('*', function (req, res) {
  console.log('REQUEST');
  res.sendFile(path.join(__dirname, 'src','index.html'));
});

/*
  FIND TEAM
 */
app.get('/team/:team_id', function(req,res){
  Team.find({id:req.params.team_id},function(err,teams){
    if(err){
      return res.status(500).json({error:err});
    }
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

  team.save(function(err){
    if(err){
      console.error(err);
      res.json({result:0});
      return;
    }
    res.json({result:1});
  });

});

app.listen(8888, function(){
  console.log('listening ...');
});
