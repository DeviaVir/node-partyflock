var Promise = require('bluebird');

/**
 * User instance constructor
 * @prototype
 * @class User
 */
function User(instance) {
  this.partyflock = instance || {};
  this.service = 'user';
}

/**
 * Retrieve information about the current User 
 * @return {Promise}            Object with data
 */
User.prototype.lookup = function user(id) {
  var headers = {
    'Pf-ResultWish': 'user(nick,userimage(large=0,filetype,width,height))'
  }
  return this.partyflock.communicate(this.service, id, headers);
};  

module.exports = User;
