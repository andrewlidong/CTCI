class Card {
    constructor(suit, number) {
        this.suit = suit;
        this.number = number;
        this.value = `${this.number} ${this.suit}`;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.newDeck();
    }

    newDeck() {
        this.clear();
        const suits = ['\u2660', '\u2663', '\u2665', '\u2666'];
        const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        suits.forEach((suit) => {
            numbers.forEach((number) => {
                this.cards.push(new Card(suit, number));
            });
        });
    }

    clear() {
        while (this.cards.length > 0) {
            this.cards.pop();
        }
    }

    shuffle() {
        this.cards.sort(() => Math.random() > 0.5 ? 1 : -1);
    }

    deal() {
        return this.cards.pop();
    }
}

class Dealer {
    constructor() {
        this.deck = new Deck();
        this.hand = [];
    }

    shuffleCards() {
        for (let i = 0; i < 5; i++) {
            this.deck.shuffle();
        }
    }
    
    dealCard() {
        return this.deck.deal();
    }

    receiveCard(card) {
        this.hand.push(card);
    }
}

class Player {
    constructor() {
        this.hand = [];
    }

    receiveCard(card) {
        this.hand.push(card);
    }

    discardHand() {
        this.hand = [];
    }
}

class Table {
    constructor() {
        this.dealer = new Dealer();
        this.players = [];
    }

    join(player) {
        if (this.players.length > 5) {
            console.log('game is full');
        } else if (this.players.indexOf(player) > -1) {
            console.log('this player is already in the game');
        } else {
            this.players.push(player);
        }
    }

    runGame() {
        let dealer = this.dealer;
        let players = this.players;

        if (players.length === 0) {
            console.log('nobody is playing...');
        } else {
            console.log('starting blackjack game');
            dealer.shuffleCards();
            for (let i = 0; i < 2; i++) {
                players.forEach((player) => {
                    player.receiveCard(dealer.dealCard());
                });
                dealer.receiveCard(dealer.dealCard());
            }
            console.log('dealer hand', dealer.hand.map((card) => card.value));
            players.forEach((player) => {
                console.log('player hand', player.hand.map((card) => card.value));
            });
        }
    }
}

let table = new Table();
let sohang = new Player();
let rachel = new Player();
let robbie = new Player();
let jessica = new Player();

table.join(sohang);
table.join(rachel);
table.join(robbie);
table.join(jessica);

table.runGame();