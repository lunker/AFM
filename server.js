/*eslint no-console:0 */
'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app= express();
const mongoose=require('mongoose');
const teamRoutes=require('./backend/routes/Team');
const userRoutes=require('./backend/routes/User');

const db=mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log('connected to mongod server');
});
mongoose.connect('mongodb://localhost/afm');

app.use(bodyParser.json());
app.use(teamRoutes);
app.use(userRoutes);

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

app.listen(8888, function(){
  console.log('listening ...');
});
