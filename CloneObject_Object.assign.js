var CarObj = {
    Make: "BMW",
    Model: "E93 M5",
    Color: "Dark Grey",
    Year: "2017",
    Condition: "Runs & Drives",
    Damage: "No Damage"
}

var AutoObj = Object.assign({}, CarObj);

CarObj.Color = "Blue"

console.log(CarObj)
console.log(AutoObj)
    // Now the color in CarObj is Blue where as in AutoObj its Dark Grey, as the assign 
    // function copies the elements from CarObj to AutoObj

// However, the "Assign Function" has limitations. It doesn't work for Nested Objects,
// because it creates a reference to the nested object.