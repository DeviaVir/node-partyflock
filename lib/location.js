var Promise = require('bluebird');

/**
 * Location instance constructor
 * @prototype
 * @class Location
 */
function Location(instance) {
  this.partyflock = instance || {};
  this.service = 'location';
}

/**
 * Retrieve information about the current Location 
 * @return {Promise}            Object with data
 */
Location.prototype.search = function search() {
  return this.partyflock.communicate(this.service, 'search');
};  

/**
 * Retrieve information about the current Location 
 * @return {Promise}            Object with data
 */
Location.prototype.lookup = function lookup(id) {
  var headers = {
    'Pf-HourOffset': '6',
    'Pf-ResultWish': 'location(name,agenda(party(name=b%,stamp=%)))'
  };

  return this.partyflock.communicate(this.service, id, headers);
};  

module.exports = Location;
