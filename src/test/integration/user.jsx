require('co-mocha');
const mongoose = require('mongoose');
//const expect = require('chai').expect;
const User = require('../../model/user.jsx');

// const testUser = new User({
//   email: 'test@test.com',
//   password: '12345678'
// })

describe('Testing Company methods', () => {
  before(function* () {
    yield mongoose.connect('mongodb://127.0.0.1:27017/test');
  });
  beforeEach(function* () {
    yield User.remove({});
  });
  // it('Compare password should return true if password is correct', function* () {
  // })
  // it('Compare password should return false if password is correct', function* () {
  // })
  // it('Test login method', function* () {
  // });
});
