'use strict';

var services = require("./services.js");

module.exports = {

  VERSION: "Randomolunk Egyet",

  bet_request: function(game_state, bet) {
    try {
      bet(services.calBet(game_state))
    } catch (e) {
      console.log(e);
      bet(0);
    }
  },

  showdown: function(game_state) {

  }
};



