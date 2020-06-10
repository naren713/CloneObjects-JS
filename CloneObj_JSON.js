var CarObj = {
    Make: "BMW",
    Model: "E93 M5",
    Color: "Dark Grey",
    Year: "2017",
    Condition: "Runs & Drives",
    Damage: "No Damage",
    MoreInfo: {
        Miles: 15000,
        Insurance: "Yes",
        SellingPrice: 50000
    }
}

var VehicleObj = JSON.parse(JSON.stringify(CarObj));
// JSON.stringify() => Converts an obj to a string
// JSON.parse() => Converts the string back to an object

CarObj.MoreInfo.Miles = 7500
CarObj.MoreInfo.SellingPrice = 10000

console.log(CarObj)
    // New values of "Miles & SellingPrice" are applied only to CarObj
console.log(VehicleObj)