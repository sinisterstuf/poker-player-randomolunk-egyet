var assert = require("assert")
var s = require('../services')
var gs = require("./data/game-state-example.json")

describe("player", function() {

    describe("#checkCard", function() {
        it("converts 7 to 7", function() {
            assert.equal( s.checkCard(7), 7 )
        })
        it("converts A to 14", function() {
            assert.equal( s.checkCard('A'), 14 )
        })
    })

    describe("#findPair", function() {
        it("finds pair", function() {
            assert.equal( s.findPair([1,2,3,3,4]), true )
        })
        it("ignores non-pair", function() {
            assert.equal( s.findPair([1,2,3,4,5]), false )
        })
    })

})
