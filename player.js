'use strict';

var checkCard = require("./services.js");

module.exports = {

  VERSION: "Randomolunk Egyet",

  bet_request: function(game_state, bet) {
    try {
      var ours = game_state.players[game_state.in_action].hole_cards;
      if (ours[0] === ours[1]) {
        bet(10000);
      } else if (ours[0] < 6 && ours[1] < 6) {
        bet(10);
      } else if (ours[0] < 10 && ours[1] < 10) {
        bet(200)
      } else {
        bet(10000)
      }
    } catch (e) {
      console.log(e);
      bet(0);
    }
  },

  showdown: function(game_state) {

  }
};



