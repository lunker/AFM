/*eslint no-console:0 */
'use strict';
require('babel-register');

const path = require('path');
const express = require('express');
const Handlebars  = require('handlebars');


const React=require('react');
const ReactDOMServer=require('react-dom/server');

const renderToString = require('react-dom/server').renderToString;
const createStore=require('redux').createStore;
// const Store=require('./src/stores/store');

// import { renderToString } from 'react-dom/server';
// import { createStore } from 'redux';
// import Store from './src/stores/store';

const bodyParser = require('body-parser');
const app= express();
const mongoose=require('mongoose');
const teamRoutes=require('./backend/routes/Team');
const userRoutes=require('./backend/routes/User');
require('node-jsx').install({ harmony: true });

// var App=require('./src/containers/Root');

/*
var template = Handlebars.compile(fs.readFileSync('./src/index.html').toString());

app.get('/', function(req, res) {
  res.send(template({
    markup: React.renderToString(React.createElement(App))
  }));
});

app.use(function (req, res) {
     // pass in `req.path` and the router will immediately match
     Router.run(routes, req.path, function (Handler) {
         var markup = React.renderToString(<Handler/>);
         res.render('index', {markup: markup});
     });
});
*/

const db=mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log('connected to mongod server');
});
mongoose.connect('mongodb://localhost/afm');

app.use(bodyParser.json());
app.use(teamRoutes);
app.use(userRoutes);

/*
  SERVER SIDE RENDERING

 var template = Handlebars.compile(fs.readFileSync('./src/index.html').toString());

app.get('/', function(req,res){
  res.send(template({
   markup: ReactDOMServer.renderToString(React.createElement(App))
 }));
});

*/

app.get('/src/styles/:resource', function(req,res){
  res.sendFile(path.join(__dirname,'src','styles',req.params.resource));
});

app.get('/fonts/');

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
