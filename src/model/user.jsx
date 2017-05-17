'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_FACTOR = 10;

const UserSchema = new mongoose.Schema({
  email: { type: String, default: '', required: true, index: { unique: true}},
  password: { type: String, default: '', required: true},
  salt: { type: String, default: ''}
})

UserSchema.pre('save', (next) => {
  let user = this;
  if(!user.isModified('password'))
    return next();
  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if(err)
      return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if(err)
        return next(err);
        user.password = hash;
        next();
    })
  })
});

UserSchema.methods.comparePassword = (password, cb) => {
  console.log(password)
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if(err) 
      return cb(err);
      cb(null, isMatch);
  })  
}

UserSchema.methods.makeSalt = function() {
  return Math.round((new Date().valueOf() * Math.random())) + '';
}

UserSchema.methods.authenticate = function(text) {
  return this.encryptPassword(text) === this.password;
}

module.exports = mongoose.model('User', UserSchema);

exports.User = mongoose.model('User', UserSchema);