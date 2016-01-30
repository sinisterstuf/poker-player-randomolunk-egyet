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

module.exports = {
    checkCard: checkCard,
}
