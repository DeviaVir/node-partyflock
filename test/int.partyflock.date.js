var Promise = require( 'bluebird' );

var Partyflock = require( '../partyflock' );

describe('I:Partyflock:date', function() {
  'use strict';

  describe( 'lookup', function() {
    var partyflockInstance;
    beforeEach(function() {
      partyflockInstance = new Partyflock();
    });

    it( 'should return date lookup', function(done) {
      this.timeout(5000);
      return partyflockInstance.date.lookup('20151017').then(function(info) {
        console.log('info', info);
      }).then(done, done);
    });
  });
});
