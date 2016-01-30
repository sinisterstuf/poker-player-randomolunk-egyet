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

function calculateBet(gs) {
  var bet;
  var r = ranking(gs)
  if (r) {
    return minbet(gs) + raise(r);
  } else {
    if (!checkAfterTheTurn(gs)) {
        return highCards(gs);
    } else {
        return 10;
    }
  }
}

function highCards(gs) {
  var ours = gs.players[gs.in_action].hole_cards;
  var card1 = checkCard(ours[0].rank);
  var card2 = checkCard(ours[1].rank);

  if (card1 < 2 && card2 < 2) {
    return 10;
  } else if (card1 < 6 && card2 < 6 && !lotsOfMoney(gs)) {
    l("low cards");
    return minbet(gs);
  } else if (card1 < 10 && card2 < 10 && !lotsOfMoney(gs)) {
    l("middle cards");
    return minbet(gs) + 50;
  } else if (!lotsOfMoney(gs)) {
    l("high cards");
    return minbet(gs) + 200;
  } else {
    return 2;
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
    return cards.sort(function(a,b) {return a-b;});
}

function findPair(cards) {
    for (var i=0; i < cards.length-1; i++) {
        if (cards[i] === cards[i+1]) {
            return true;
        }
    }
    return false;
}

function twoPair(cards) {
    counter = 0;
    for (var i = 0; i < cards.length - 2; i++) {
        if (cards[i] === cards[i+1]) {
            counter++;
            i++;
        }
    }
    if (counter >= 2) {
        return true;
    }
    return false;
}

function threeOfaKind(cards) {
    for (var i in cards) {
        if (cards[i] === cards[i+1] && cards[i+1] === cards[i+2]) {
           return true;
        }
    }
    return false;
}

function raise(rank) {
    var small = 100;
    var big = 300;
    return big * rank;
}

function lotsOfMoney(gs) {
    if (minbet(gs) >= gs.players[gs.in_action].stack / 3) {
        return true;
    }
}

function checkAfterTheTurn(gs) {
  if (gs.community_cards.length === 3) {
    return true;
  } else {
    return false;
  }
}

function ranking(gs) {
  var cards = cardholder(gs);
  if (threeOfaKind(cards)) return odds.three
  if (twoPair(cards)) return odds.twoPair;
  if (findPair(cards)) {
    return odds.pair;
  } else {
    return false;
  }
}

var odds = {
  highCard : 1,
  pair : 1.37,
  twoPair : 20,
  three : 46.3,
  straight : 254
}


module.exports = {
  calBet: calculateBet,
  minbet: minbet,
  checkCard: checkCard,
  calculateBet: calculateBet,
  highCards: highCards,
  cardholder: cardholder,
  findPair: findPair,
  twoPair: twoPair,
  threeOfaKind: threeOfaKind,
  raise: raise,
  lotsOfMoney: lotsOfMoney,
  ranking: ranking,
}
