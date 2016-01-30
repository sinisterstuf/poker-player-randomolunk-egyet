function minbet(gs) {
  return gs.current_buy_in - gs.players[in_action][bet] + gs.minimum_raise;
}

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
    }

function calculateBet(game_state) {
    var ours = game_state.players[game_state.in_action].hole_cards;
      if (ours[0] === ours[1]) {
        return 100000;
      } else if (ours[0] < 6 && ours[1] < 6) {
        return 10;
      } else if (ours[0] < 10 && ours[1] < 10) {
        return 200;
      } else {
        return 100000;
      }
}


module.exports = {
    checkCard: checkCard,
    calBet: calculateBet,
}
