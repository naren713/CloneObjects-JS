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
        SellingPrice: 50000,
    },
    MyFun: function() {
        return "Its a good deal!";
    },
};

var VehicleObj = JSON.parse(JSON.stringify(CarObj));

console.log(CarObj.MyFun());
// returns function return statement

// console.log(VehicleObj.MyFun());
// throws error stating MyFun is not a function

var _ = require("lodash");

var CloneObj = _.cloneDeep(CarObj);
console.log(VehicleObj);
// Doesn't display the function as VehicleObj is cloned using JSON method
console.log(CloneObj);
// Displays the function too
console.log(CloneObj.MyFun());
// Returns the function return statement