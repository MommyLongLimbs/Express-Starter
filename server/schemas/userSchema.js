//~====================================
//&            Requirements
//~====================================
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/config.env" });

//~====================================
//&            Schema
//~====================================
//? user schema initialization
const userSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
	},
	password: String,
});




//~====================================
//&        Default User Check
//~====================================
let userModel = mongoose.model("user", userSchema);
userModel
	.find({})
	.then((data) => {
		if (data.length == 0) {
			let user = new userModel({
				username: "Admin",
				password: "admin123",
			});
			user.save();
			console.log("Default User Created");
		}
	})
	.catch((err) => console.log(err));

//~====================================
//&            Export
//~====================================

module.exports = mongoose.model("user", userSchema);
