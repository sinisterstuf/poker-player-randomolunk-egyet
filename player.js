
module.exports = {

  VERSION: "Randomolunk Egyet",

  bet_request: function(game_state, bet) {
    try {
      ours = game_state.players[game_state.in_action].hole_cards;
      if (ours[0] < 6 && ours[1] < 6) {
        bet 10;
      } else {
        bet 10000;
      }
    } catch (e) {
      console.log(e);
      bet(0);
    }
  },

  showdown: function(game_state) {

  }
};
