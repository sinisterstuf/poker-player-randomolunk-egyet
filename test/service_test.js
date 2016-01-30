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

})
