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
        it("finds pair in hand", function() {
            assert.equal( s.findPair([2,2]), true )
        })
        it("ignores non-pair in hand", function() {
            assert.equal( s.findPair([2,3]), false )
        })
        it("finds pair", function() {
            assert.equal( s.findPair([1,2,3,3,4]), true )
        })
        it("finds aces in common", function() {
            assert.equal( s.findPair([14,14,1,2,3,3,4]), true )
        })
        it("ignores non-pair", function() {
            assert.equal( s.findPair([1,2,3,4,5]), false )
        })
    })

    describe("#twoPair", function() {
        it("double in hand is impossible", function() {
            assert.equal( s.twoPair([2,2]), false )
        })
        it("ignores non-pair in hand", function() {
            assert.equal( s.twoPair([2,3]), false )
        })
        it("finds double", function() {
            assert.equal( s.twoPair([2,2,3,3,4]), true )
        })
        it("ignores single pair", function() {
            assert.equal( s.twoPair([1,2,3,3,4]), false )
        })
        it("finds aces in common", function() {
            assert.equal( s.twoPair([14,14,1,2,3,3,4]), true )
        })
        it("ignores non-pair", function() {
            assert.equal( s.twoPair([1,2,3,4,5]), false )
        })
    })

    describe("#threeOfaKind", function() {
        it("double in hand is impossible", function() {
            assert.equal( s.threeOfaKind([2,2]), false )
        })
        it("ignores non-pair in hand", function() {
            assert.equal( s.threeOfaKind([2,3]), false )
        })
        it("finds triplet", function() {
            assert.equal( s.threeOfaKind([2,3,3,3,4]), true )
        })
        it("ignores single pair", function() {
            assert.equal( s.threeOfaKind([1,2,3,3,4]), false )
        })
        it("ignores double pair", function() {
            assert.equal( s.threeOfaKind([2,2,3,3,4]), false )
        })
        it("finds aces in common", function() {
            assert.equal( s.threeOfaKind([14,14,14,2,3,3,4]), true )
        })
        it("ignores non-pair", function() {
            assert.equal( s.threeOfaKind([1,2,3,4,5]), false )
        })
    })

})
