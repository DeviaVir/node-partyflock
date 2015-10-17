var Promise = require('bluebird'),
    moment = require('moment');

/**
 * Party instance constructor
 * @prototype
 * @class Party
 */
function Party(instance) {
  this.partyflock = instance || {};
  this.service = 'party';
}

/**
 * Retrieve information about the current Party 
 * @return {Promise}            Object with data
 */
Party.prototype.search = function search() {
  var headers = {
    'Pf-ResultWish': 'party(name=%arena%,stamp<' + moment.unix() + ')'
  };

  return this.partyflock.communicate(this.service, 'search', headers);
};  

module.exports = Party;
