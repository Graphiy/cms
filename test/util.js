var assert = require('assert')
, _ = require('lodash')
, d3 = require('d3')
, Util = require('../core/util')

describe('Util', function() {
  // with intersections and lateral points
  var p1 = [ [461, 549], [314, 514], [514, 484], [626, 190], [621, 242], [361, 604], [635, 294], [623, 346], [483, 408], [347, 330], [341, 724], [245, 467], [281, 372] ]  
  // another intersection
  var p2 = [[341,508],[467,567],[562,466],[359,370],[495,344]]
  var p3 = [[461, 549],[461, 549],[461, 549],[461, 549]]


  describe('centroid', function () {
    it('should return center of polygon with contour intersection', function () {
      var center = Util.centroid(p1)
      assert.equal(Math.round(center[0]), 432)
      assert.equal(Math.round(center[1]), 448)
    })
    it('should return center of polygon with another contour intersection', function () {
      var center = Util.centroid(p2)
      assert.equal(Math.round(center[0]), 462)
      assert.equal(Math.round(center[1]), 468)
    })
    it('should return middle of 2 points', function () {
      var center = Util.centroid(p1.slice(0,2))
      assert.equal(Math.round(center[0]), 388)
      assert.equal(Math.round(center[1]), 532)
    })
    it('should return point if alone', function () {
      var center = Util.centroid(p1.slice(0,1))
      assert.equal(Math.round(center[0]), 461)
      assert.equal(Math.round(center[1]), 549)
    })
    it('should return point if all are the same', function () {
      var center = Util.centroid(p3)
      assert.equal(Math.round(center[0]), 461)
      assert.equal(Math.round(center[1]), 549)
    })
  })
})
