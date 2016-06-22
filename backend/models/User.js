'use strict';
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
  id: String,
  password: String,
  name: String,
  grade: String, // 운영진, 주장,
  position: String // fw, mf df, gk 
});


module.exports=mongoose.model('user', userSchema);
