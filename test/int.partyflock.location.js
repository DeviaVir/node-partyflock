var Promise = require( 'bluebird' );

var Partyflock = require( '../partyflock' );

  describe('I:Partyflock:location', function() {
  'use strict';

  describe( 'lookup', function() {
    var partyflockInstance;
    beforeEach(function() {
      partyflockInstance = new Partyflock();
    });

    it( 'should return location lookup', function(done) {
      this.timeout(5000);
      return partyflockInstance.location.lookup('7731').then(function(info) {
        console.log('info', info);
      }).then(done, done);
    });
  });
});
