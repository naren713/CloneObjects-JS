var CarObj = {
    Make: "BMW",
    Model: "E93 M5",
    Color: "Dark Grey",
    Year: "2017",
    Condition: "Runs & Drives",
    Damage: "No Damage",
};

var VehicleObj = CarObj;

CarObj.Color = "Blue";

console.log(VehicleObj);
console.log(CarObj);
// Prints the same values

// As we are using assignment operator, it just assigns the reference to VehicleObj
// and both these objects point to the same Object.