var assert = require("assert")
var s = require('../services')
var gs = require("./data/game-state-example.json")

describe("player", () => {

    describe("#checkCard", () => {
        it("converts 7 to 7", () => {
            assert.equal( s.checkCard(7), 7 )
        })
        it("converts A to 14", () => {
            assert.equal( s.checkCard('A'), 14 )
        })
    })

    describe("#findPair", () => {
        it("finds pair in hand", () => {
            assert.equal( s.findPair([2,2]), true )
        })
        it("ignores non-pair in hand", () => {
            assert.equal( s.findPair([2,3]), false )
        })
        it("finds pair", () => {
            assert.equal( s.findPair([1,2,3,3,4]), true )
        })
        it("finds aces in common", () => {
            assert.equal( s.findPair([14,14,1,2,3,3,4]), true )
        })
        it("ignores non-pair", () => {
            assert.equal( s.findPair([1,2,3,4,5]), false )
        })
    })

    describe("#twoPair", () => {
        it("double in hand is impossible", () => {
            assert.equal( s.twoPair([2,2]), false )
        })
        it("ignores non-pair in hand", () => {
            assert.equal( s.twoPair([2,3]), false )
        })
        it("finds double", () => {
            assert.equal( s.twoPair([2,2,3,3,4]), true )
        })
        it("ignores single pair", () => {
            assert.equal( s.twoPair([1,2,3,3,4]), false )
        })
        it("finds aces in common", () => {
            assert.equal( s.twoPair([14,14,1,2,3,3,4]), true )
        })
        it("ignores non-pair", () => {
            assert.equal( s.twoPair([1,2,3,4,5]), false )
        })
    })

    describe("#threeOfaKind", () => {
        it("double in hand is impossible", () => {
            assert.equal( s.threeOfaKind([2,2]), false )
        })
        it("ignores non-pair in hand", () => {
            assert.equal( s.threeOfaKind([2,3]), false )
        })
        it("finds triplet", () => {
            assert.equal( s.threeOfaKind([2,3,3,3,4]), true )
        })
        it("ignores single pair", () => {
            assert.equal( s.threeOfaKind([1,2,3,3,4]), false )
        })
        it("ignores double pair", () => {
            assert.equal( s.threeOfaKind([2,2,3,3,4]), false )
        })
        it("finds aces in common", () => {
            assert.equal( s.threeOfaKind([14,14,14,2,3,3,4]), true )
        })
        it("ignores non-pair", () => {
            assert.equal( s.threeOfaKind([1,2,3,4,5]), false )
        })
    })

})
