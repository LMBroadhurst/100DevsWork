//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

const streetFighter = {};

streetFighter.name = "Lewis";
streetFighter.fightingStyle = "Kickboxing";
streetFighter.nationality = "Martian";
streetFighter.hairColour = "Green";
streetFighter.specialMoveCharged = false;

streetFighter.chargeSpecialMove = () => {
    return this.specialMoveCharged = true;
}

streetFighter.useSpecialMove = () => {
    console.log("RKO!");
    this.specialMoveCharged = false;
}

streetFighter.changeName = (name) => {
    return this.name = name;
}

streetFighter.kick = () => {console.log("Wacha!")};
