
module.exports = {

  VERSION: "Randomolunk Egyet",

  bet_request: function(game_state, bet) {
    try {
      bet(100);
    } catch (e) {
      console.log(e);
      bet(0);
    }
  },

  showdown: function(game_state) {

  }
};
