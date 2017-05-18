require('co-mocha');
const mongoose = require('mongoose');
const expect = require('chai').expect;
var User = require('../../model/user.jsx')

const testUser = new User({
  email: 'test@test.com', 
  password: '12345678'
})

describe('Testing Company methods', () => {
  before(function* () {
    const db = yield mongoose.connect('mongodb://127.0.0.1:27017/test');
  });
  beforeEach(function* () {
    yield User.remove({});
  });
  it('Compare password should return true if password is correct', function* () {
    testUser.save(function(err){
      if(err) throw err;
    })
    User.findOne({email: 'test@test.com'}, (err, user) => {
      if(err) throw err;
      // test a matching password
      user.comparePassword('12345678', (err, isMatch) => {
          if (err) throw err;
          expect(isMatch).to.be(true)
      });
    })
  })
  it('Compare password should return false if password is correct', function* () {
    testUser.save(function(err){
      if(err) throw err;
    })
    User.findOne({email: 'test@test.com'}, (err, user) => {
      if(err) throw err;
      // test a matching password
      user.comparePassword('87654321', (err, isMatch) => {
          if (err) throw err;
          expect(isMatch).to.be(false)
      });
    })
  })
  it('Test login method', function* () {
    testUser.save(function(err){
      if(err) throw err;
    })
    let result = User.login('test@test.com', 12345678);
    expect(result).to.be(true);
  })
})