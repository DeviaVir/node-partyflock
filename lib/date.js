var Promise = require('bluebird');

/**
 * Date instance constructor
 * @prototype
 * @class Date
 */
function Date(instance) {
  this.partyflock = instance || {};
  this.service = 'date';
}

/**
 * Retrieve information about the current Date 
 * @return {Promise}            Object with data
 */
Date.prototype.lookup = function lookup(date) {
  var headers = {
    'Pf-ResultWish': 'date(agenda(party(name,fbid,stamp,notime,door_close_hour,door_close_mins,duration_secs,genre(name),flyer(type,size=thumb,width,height,link),location(name,address,zipcode,latitude,longitude,city(name,country(name))),organization(name),area(incomplete,lineup(time_start,time_end,artist(name))))))'
  };

  return this.partyflock.communicate(this.service, date, headers);
};  

module.exports = Date;
