var Promise = require('bluebird');

/**
 * Artist instance constructor
 * @prototype
 * @class Artist
 */
function Artist(instance) {
  this.partyflock = instance || {};
  this.service = 'artist';
}

/**
 * Retrieve information about the current Artist 
 * @return {Promise}            Object with data
 */
Artist.prototype.search = function search() {
  return this.partyflock.communicate(this.service, 'search');
};  

/**
 * Retrieve information about the current Artist 
 * @return {Promise}            Object with data
 */
Artist.prototype.lookup = function lookup(id) {
  var headers = {
    'Pf-ResultWish': 'artist(name,realname,genre(name))'
  };

  return this.partyflock.communicate(this.service, id, headers);
};  

module.exports = Artist;
