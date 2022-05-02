//DO NOT MODIFY THESE VARIABLES
let greenWireConnected = true
let yellowWireConnected = true
let redWireConnected = true
let waterIsOn = true

let ride1PowerElement = document.querySelector("#ride-1-power")
let ride2PowerElement = document.querySelector("#ride-2-power")
let ride3PowerElement = document.querySelector("#ride-3-power")
let ride4PowerElement = document.querySelector("#ride-4-power")

//Everything below is fair game for you to power on the rides

//Ride 1 works when:
    // green wire is connected
let ride1PowerOn = false
if (greenWireConnected){
    ride1PowerOn = true
}
//Ride 2 works when 
    //green and yellow wires are connected
let ride2PowerOn = false
if (greenWireConnected && yellowWireConnected){
    ride2PowerOn = true;
}

//Ride 3 works when:
    // green and red wires are connected
    // water is on 
    // yellow wire is not connected
let ride3PowerOn = false
if(greenWireConnected && redWireConnected && waterIsOn && !yellowWireConnected){
    ride3PowerOn = true
}

//Ride 4 works when
    //red wire is connected
let ride4PowerOn = false

//Ride 4 is a slot machine
    //if a 1 is rolled it should return "star"
    //if a 2 is rolled it should return "car"
    //if a 3 is rolled it should return "pot of gold"
    //if a 4 is rolled it should return "clover"
    //if a 5 is rolled it should return "bowling ball"
    //if a 6 is rolled it should return "tiger"
    //if a 7 is rolled it should return "seven"
function ride4SlotMachine(rolledNumber){
    return "nothing"
}