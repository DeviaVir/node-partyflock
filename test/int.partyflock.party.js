var Promise = require( 'bluebird' );

var Partyflock = require( '../partyflock' );

  describe('I:Partyflock:party', function() {
  'use strict';

  describe( 'info', function() {
    var partyflockInstance;
    beforeEach(function() {
      partyflockInstance = new Partyflock();
    });

    it( 'should return party info', function(done) {
      this.timeout(5000);
      return partyflockInstance.party.search().then(function(info) {
        console.log('info', info);
      }).then(done, done);
    });
  });
});
