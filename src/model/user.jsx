'use strict';
const mongoose = require('mongoose');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const SALT_FACTOR = 10;
const AppError = require('../lib/AppError.jsx');
const ErrorEnum = require('../lib/enum/error.jsx');

const UserSchema = new mongoose.Schema({
  email: { type: String, default: '', required: true, index: { unique: true}},
  password: { type: String, default: '', required: true},
  salt: { type: String, default: ''}
});

UserSchema.pre('save', (next) => {
  let user = this;
  if(!user.isModified('password'))
    return next();
  bcrypt.hash(SALT_FACTOR, (err, salt) => {
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

UserSchema.methods.createUser = (email, password, confirmedPassword) => {
  if(!email || !password)
    throw new AppError(ErrorEnum.INVALID_PAYLOAD);
  if(!password !== confirmedPassword)
    throw new AppError(ErrorEnum.PASSWORD_NOT_MATCH);
  if(this.findByEmail(email) !== undefined)
    throw new AppError(ErrorEnum.DUPLICATED_EMAIL);
  let hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
  hashedPassword = bcrypt.hash(hashedPassword, SALT_FACTOR, (err,res) => {
    if(err)
      throw err;    
    this.insertOne({
      email,
      hashedPassword,
      salt: SALT_FACTOR
    });
  });
}

UserSchema.methods.comparePassword = (password, cb) => {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if(err) 
      return cb(err);
      cb(null, isMatch);
  })  
};

UserSchema.methods.login = (email, password) => {
  let user = this;
  let currentUseruser = user.findByEmail(email);
  let isMatch = currentUseruser.comparePassword(password);
  return isMatch;
};

UserSchema.methods.findByEmail = (email, opt = {}) => {
  return this.findOne({ 'email': email }, opt);
};

UserSchema.methods.makeSalt = function() {
  return Math.round((new Date().valueOf() * Math.random())) + '';
};


module.exports = mongoose.model('User', UserSchema);

exports.User = mongoose.model('User', UserSchema);