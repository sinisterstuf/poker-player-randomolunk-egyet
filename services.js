function minbet(gs) {
  return gs.current_buy_in - gs.players[in_action][bet] + gs.minimum_raise;
}

var l = console.log;

function checkCard(card) {
        switch (card) {
            case "J" :
                card = 11;
                break;
            case "Q" :
                card = 12;
                break;
            case "K" :
                card = 13;
                break;
            case "A" :
                card = 14;
                break;
            default:
                card = card;
        }
        return card;
    }

function calculateBet(game_state) {
    var ours = game_state.players[game_state.in_action].hole_cards;
    var card1 = checkCard(ours[0]);
    var card2 = checkCard(ours[1]);
      if (card1 === card2) {
        l("pair");
        return 100000;
      } else if (card1 < 6 && card2 < 6) {
        l("low cards");
        return 10;
      } else if (card1 < 10 && card2 < 10) {
        l("middle cards");
        return 200;
      } else {
        l("high cards");
        return 100000;
      }
}


module.exports = {
    checkCard: checkCard,
    calBet: calculateBet,
}
