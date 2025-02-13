//~====================================
//&            Requirements
//~====================================
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/config.env" });

//~====================================
//&            Schema
//~====================================
//? item schema initialization
const itemSchema = mongoose.Schema({
    name: {
        type: String
    }
});




//~====================================
//&        Default Item Check
//~====================================
let itemModel = mongoose.model("item", itemSchema);
itemModel
    .find({})
    .then((data) => {
        if (data.length == 0) {
            for (let i = 0; i < 1000; i++) {
                let item = new itemModel({
                    name: "item" + i
                });
                item.save();
                console.log("Default Items Created");
            }
        }
    })
    .catch((err) => console.log(err));

//~====================================
//&            Export
//~====================================

module.exports = mongoose.model("item", itemSchema);
