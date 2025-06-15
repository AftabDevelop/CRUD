const mongoose = require('mongoose');
const {Schema} = mongoose;

const userschema = new Schema({
  name:{
    type:String,
    required:true,
    minLength:3,
    maxLength:30
  },
  age:{
    type:Number,
    min:14,
    max:70
  },
  gender:{
    type:String,
    enum:["male","female","other"]
  },
  email:{
    type:String,
    required:true,
    index:true,
    unique:true
  }
},{timestamps:true});

const user = mongoose.model('user',userschema);

module.exports = user;