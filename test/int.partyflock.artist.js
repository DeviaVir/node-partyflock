var Promise = require( 'bluebird' );

var Partyflock = require( '../partyflock' );

describe('I:Partyflock:artist', function() {
  'use strict';

  describe( 'lookup', function() {
    var partyflockInstance;
    beforeEach(function() {
      partyflockInstance = new Partyflock();
    });

    it( 'should return artist info', function(done) {
      this.timeout(5000);
      return partyflockInstance.artist.lookup('1').then(function(info) {
        console.log('info', info);
      }).then(done, done);
    });
  });
});
