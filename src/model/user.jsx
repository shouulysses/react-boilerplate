const mongoose = require('mongoose');
//const crypto = require('crypto');
//const bcrypt = require('bcrypt');
//const SALT_FACTOR = 10;
//const AppError = require('../lib/AppError.jsx');
//const ErrorEnum = require('../lib/enum/error.jsx');

const UserSchema = new mongoose.Schema({
  email: { type: String, default: '', required: true, index: { unique: true } },
  password: { type: String, default: '', required: true },
  salt: { type: String, default: '' }
});

UserSchema.pre('save', () => {
});

module.exports = mongoose.model('User', UserSchema);

exports.User = mongoose.model('User', UserSchema);
