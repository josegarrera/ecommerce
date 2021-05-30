const mongoose = require('mongoose');
const {Users} = require('../models/index');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const {FRONTEND_URL} = process.env;

let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: 'pedrocontreras182@gmail.com', // generated ethereal user
		pass: 'zejltgojoaidttvb', // generated ethereal password
	},
});
transporter.verify().then(() => {
	console.log('a ver si funca');
});

async function forgotPassword(req, res) {
	const {email} = req.body;
	let verificationLink;
	if (!email) return res.status(401).send({message: 'email is required'});
	try {
		let user = await Users.findOne({email});

		if (!user) return res.status(404).send({message: 'user not found'});
		let resetCode = Math.random().toString().slice(2, 7);
		user.resetToken = resetCode;
		await user.save();
		await transporter.sendMail({
			from: '"Forgot password" <something>', // sender address
			to: email, // list of receivers
			subject: 'Forgot password', // Subject line
			html: `
            <h1>>Forgot password? don´t worry!</h1>
                    <b>reset code ${user.resetToken}</b>
                    `, // html body
		});

		res.send({ok: true, type: 'OK', message: 'check your email'});
	} catch (error) {
		res
			.status(500)
			.send({response: '', type: 'Internal server error.', message: error});
	}
}

async function createNewPassword(req, res) {
	const {email, step, password, resetCode} = req.body;
	console.log(req.body);
	console.log('backend');

	try {
		let user = await Users.findOne({email});
		var match = user.resetToken === resetCode;

		switch (step) {
			case '1':
				if (match) {
					return res.status(200).send({message: 'code accepted', ok: true});
				} else {
					return res.status(400).send({message: 'code denied'});
				}
			case '2':
				if (match) {
					if (!password) return res.status(400).json({message: 'Bad request'});
					user.password = password;
					await user.save();
					return res.send({message: 'Password changed successfully', ok: true});
				} else {
					return res.status(400).send({message: 'Bad request'});
				}
			default:
				return res.status(400).send({message: 'bad request'});
		}
	} catch (error) {
		res
			.status(500)
			.send({response: '', type: 'Internal server error.', message: error});
	}
}

module.exports = {
	forgotPassword,
	createNewPassword,
};
