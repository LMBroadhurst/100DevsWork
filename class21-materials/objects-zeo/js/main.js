//Create a stopwatch object that has four properties and three methods


const stopwatch = {};

stopwatch.time = 40;
stopwatch.brand = "Zebra";
stopwatch.colour = "Blue";
stopwatch.isRunning = true;
stopwatch.shape = "Square";
stopwatch.size = "Small";


stopwatch.turnOnOff = function() {
    this.running = !this.running;
    alert(stopwatch.isRunning);
}

stopwatch.turnOnOff();

stopwatch.resetTime = function() {
    this.time = 0;
    console.log(this.time);
}

stopwatch.resetTime();

stopwatch.increaseTimer = function() {
    while (this.time < 60) {
        this.time++;
        console.log(this.time);
    }  
}

stopwatch.increaseTimer();

console.log(stopwatch);
