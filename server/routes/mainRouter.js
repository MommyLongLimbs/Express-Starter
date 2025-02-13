//~====================================
//&             Requirements
//~====================================
const express = require("express");
const mainRouter = express.Router();
const jwt = require('jsonwebtoken')
const userModel = require('../schemas/userSchema')




//~========================
//&          POST
//~========================
mainRouter.post("/login", (req, res, next) => {
	try {


		const { username, password } = req.body;

		userModel
			.findOne(
				{ username: new RegExp(`^${username}$`, "i"), password: password },
			)

			.then(async (result) => {
				if (result) {
					//? create refresh token that expires in 30 days
					const refreshToken = jwt.sign(
						{ user: result },
						process.env.JWTSECRET,
						{ expiresIn: "30d" }
					);

					//? create access token that expires every 15 minutes
					const accessToken = jwt.sign(
						{ user: result },
						process.env.JWTSECRET,
						{ expiresIn: "15m" },

						//? saving refresh token in cookie
						(err, token) => {
							res.cookie("refreshToken", refreshToken, { httpOnly: true });

							//? sending access token to the client
							res.json({
								token: token,
								msg: {
									error: false,
									msg: 'Login Success!'
								},
							});
						}
					);

				} else {
					res.json({
						msg: {
							error: true,
							msg: 'Wrong username or password!'
						},
					});
				}
			})
			.catch((err) => {
				console.log(err);
				res.json({
					msg: {
						error: true,
						msg: 'Wrong username or password!'
					},
				});
			});
	} catch (error) {
		console.log('ERROR LOGGING IN USER: ' + error)
		res.json({
			msg: {
				error: true,
				msg: 'Wrong username or password!'
			},
		})
	}
});



//~========================
//&          Exports
//~========================
module.exports = mainRouter;
