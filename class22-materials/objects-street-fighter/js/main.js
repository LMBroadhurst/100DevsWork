//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods


class StreetFighter {
    constructor(name, specialMove, fightingStyle, trousers) {
        this.name = name;
        this.specialMove = specialMove;
        this.fightingStyle = fightingStyle;
        this.trousers = trousers;
        this.charged = false;
        this.winner = false;

        this.koOpponent = () => { this.winner = true; };

        this.charged = () => { this.charged = true; };

        this.superKick = () => {
            this.charged = true;
            console.log("Hyaaahhh");
        };

        this.chargedKick = () => {
            if (this.charged === true) {
                console.log("Charged kick HYAH!");
                this.charged = false;
            } else {
                console.log("Time and a place, young warrior.");
            }
        };
    }
}

let steve = new StreetFighter("Lewis", "Kicker", "KBX", "None");