var Promise = require( 'bluebird' );

var Partyflock = require( '../partyflock' );

  describe('I:Partyflock:user', function() {
  'use strict';

  describe( 'lookup', function() {
    var partyflockInstance;
    beforeEach(function() {
      partyflockInstance = new Partyflock();
    });

    it( 'should return user lookup', function(done) {
      this.timeout(5000);
      return partyflockInstance.user.lookup('2269').then(function(info) {
        console.log('info', info);
      }).then(done, done);
    });
  });
});
