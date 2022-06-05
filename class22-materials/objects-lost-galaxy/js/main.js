//Create a mouse object that has four properties and three methods

function Mouse(name, colour, specie, niceTail) {
    this.name = name;
    this.colour = colour;
    this.specie = specie;
    this.niceTail = niceTail;

    this.shout = function() {
        console.log("Beep beep muthafu***r");
    }

    this.shout = function(string) {
        console.log(string + ` : ${this.name}`);
    }

    this.walk = () => {console.log("*Scurries*")}

    this.run = () => {console.log("*Scurries fast*")}
}

let me = new Mouse("Lewis", "White", "Human", true);

me.bluetooth = true;

Mouse.prototype.hat = "No Cap!";

console.log(me);