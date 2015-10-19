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
 * Search party by name (% as wildcard)
 * @param  {String} name 
 * @return {Promise}      
 */
Party.prototype.search = function search(name, headers) {
  if(typeof headers !== 'object') {
    headers = {
      'Pf-ResultWish': 'party(name=' + name + ')'
    };
  }

  return this.partyflock.communicate(this.service, 'search', headers);
};

module.exports = Party;
