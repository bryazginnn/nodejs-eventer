var assert = require('assert');

describe('Simple', function() {
    
  describe('callable', function() {
      
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
    
  });
});