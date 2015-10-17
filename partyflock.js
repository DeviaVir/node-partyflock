'use strict';

var Promise = require('bluebird'),
    request = require('request-promise'),
    OAuth = require('oauth');

var config = require('./config');

var date = require(__dirname + '/lib/date'),
    location = require(__dirname + '/lib/location'),
    artist = require(__dirname + '/lib/artist'),
    user = require(__dirname + '/lib/user'),
    party = require(__dirname + '/lib/party');



/**
 * Partyflock instance constructor
 * @prototype
 * @class  Partyflock
 */
function Partyflock(consumerKey, consumerSecret, endpoint, type) {
  this.endpoint = (endpoint ? endpoint : config.partyflock.endpoint);
  this.consumerKey = (consumerKey ? consumerKey : config.partyflock.consumerKey);
  this.consumerSecret = (consumerSecret ? consumerSecret : config.partyflock.consumerSecret);
  this.type = (type ? type : config.partyflock.type);

  this.date = new date(this);
  this.location = new location(this);
  this.artist = new artist(this);
  this.user = new user(this);
  this.party = new party(this);

  this.oauth = new OAuth.OAuth(
    'https://' + this.endpoint + '/request_token',
    '', // no need for an oauth_token request
    this.consumerKey,
    this.consumerSecret,
    '1.0A',
    null,
    'HMAC-SHA1'
  );
}

/**
 * Handle communicating with the Partyflock REST in one call
 * @param  {String} service       
 * @param  {String} method        
 * @param  {Array} data          
 * @param  {Mixed} formattedData Can be a hash or array
 * @return {Promise}               
 */
Partyflock.prototype.communicate = function communicate(service, id, headers) {
  var _this = this;
  return Promise.resolve().then(function() {
    var god = Promise.pending();

    _this.oauth.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results) {
      if(error) {
        console.error('Error occurred while handling getOAuthRequestToken', error);

        return god.reject(error);
      }

      return god.resolve([oauth_token, oauth_token_secret]);
    });

    return god.promise;
  }).then(function(res) {
    var god = Promise.pending(),
        oauth_token = res[0],
        oauth_token_secret = res[1];

    _this.oauth.get('https://' + _this.endpoint + '/' + service + '/' + id + '.' + _this.type, oauth_token, oauth_token_secret, function(error, data, response) {
      if(error) {
        console.error('Error occured while handling get', error);
        return god.reject(error);
      }

      return god.resolve(data);
    }, headers);

    return god.promise;
  }).then(function(data) {
    try {
      data = JSON.parse(data);
    } catch(e) {
      console.info('Parsing data to JSON failed', e);
    }

    return data;
  }).catch(function(err) {
    console.error('Landed in error state with', err);
    return false;
  });
};

module.exports = Partyflock;
