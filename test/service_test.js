var assert = require('chai').assert
var s = require('../services')
var gs = require("./data/game-state-example.json")

describe("player", () => {

    describe("#cardToNum", () => {
        it("converts 7 to 7", () => {
            assert.equal( s.cardToNum(7), 7 )
        })
        it("converts A to 14", () => {
            assert.equal( s.cardToNum('A'), 14 )
        })
    })

    describe("#findPair", () => {
        it("finds pair in hand", () => {
            assert.ok( s.findPair([2,2]))
        })
        it("ignores non-pair in hand", () => {
            assert.notOk( s.findPair([2,3]))
        })
        it("finds pair", () => {
            assert.ok( s.findPair([1,2,3,3,4]))
        })
        it("finds aces in common", () => {
            assert.ok( s.findPair([14,14,1,2,3,3,4]))
        })
        it("ignores non-pair", () => {
            assert.notOk( s.findPair([1,2,3,4,5]))
        })
    })

    describe("#twoPair", () => {
        it("double in hand is impossible", () => {
            assert.notOk( s.twoPair([2,2]))
        })
        it("ignores non-pair in hand", () => {
            assert.notOk( s.twoPair([2,3]))
        })
        it("finds double", () => {
            assert.ok( s.twoPair([2,2,3,3,4]))
        })
        it("ignores single pair", () => {
            assert.notOk( s.twoPair([1,2,3,3,4]))
        })
        it("finds aces in common", () => {
            assert.ok( s.twoPair([14,14,1,2,3,3,4]))
        })
        it("ignores non-pair", () => {
            assert.notOk( s.twoPair([1,2,3,4,5]))
        })
    })

    describe("#threeOfaKind", () => {
        it("double in hand is impossible", () => {
            assert.notOk( s.threeOfaKind([2,2]))
        })
        it("ignores non-pair in hand", () => {
            assert.notOk( s.threeOfaKind([2,3]))
        })
        it("finds triplet", () => {
            assert.ok( s.threeOfaKind([2,3,3,3,4]))
        })
        it("ignores single pair", () => {
            assert.notOk( s.threeOfaKind([1,2,3,3,4]))
        })
        it("ignores double pair", () => {
            assert.notOk( s.threeOfaKind([2,2,3,3,4]))
        })
        it("finds aces in common", () => {
            assert.ok( s.threeOfaKind([14,14,14,2,3,3,4]))
        })
        it("ignores non-pair", () => {
            assert.notOk( s.threeOfaKind([1,2,3,4,5]))
        })
    })

})
