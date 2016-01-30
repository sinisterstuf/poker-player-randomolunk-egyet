function minbet(gs) {
  return gs.current_buy_in - gs.players[gs.in_action]['bet'] + gs.minimum_raise;
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

function parsedBet(gs) {
  var bet = calculateBet(gs);
  return parseInt((bet < 0) ? 0 : bet);
}

function calculateBet(gs) {
    var ours = gs.players[gs.in_action].hole_cards;
    var card1 = checkCard(ours[0].rank);
    var card2 = checkCard(ours[1].rank);

    l(card1);
    l(card2);

      if (findPair(gs)) {
        l("pair");
        return minbet(gs) + 100000;
      } else if (card1 < 2 && card2 < 2) {
        return 10;
      } else if (card1 < 6 && card2 < 6) {
        l("low cards");
        return minbet(gs);
      } else if (card1 < 10 && card2 < 10) {
        l("middle cards");
        return minbet(gs) + 200;
      } else {
        l("high cards");
        return minbet(gs) + 100000;
      }
}

function cardholder(game_state) {
    var ours = game_state.players[game_state.in_action].hole_cards;
    var common = game_state.community_cards;
    var cards = common.map(function(x) {
        return checkCard(x.rank);
    });
    cards.push(checkCard(ours[0].rank));
    cards.push(checkCard(ours[1].rank));
    return cards;
}

function findPair(game_state) {
    var cards = cardholder(game_state);
    cards.sort();
    for (var i in cards) {
        if (i = cards.length) return false;
        if (cards[i] === cards[i+1]) {
            return true;
        }
    }
}


module.exports = {
    calBet: parsedBet,
}
