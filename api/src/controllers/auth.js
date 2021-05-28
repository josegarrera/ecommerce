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

		if (!user) return res.status(400).send({message: 'user not found'});
		let token = jwt.sign({userId: user._id, email: user.email}, 'top_secret', {
			expiresIn: '10m',
		});
		verificationLink = `${FRONTEND_URL}/new-password/${token}`;
		user.resetToken = token;
		await user.save();
		await transporter.sendMail({
			from: '"Forgot password" <something>', // sender address
			to: email, // list of receivers
			subject: 'Forgot password', // Subject line
			html: `
            <h1>>Forgot password? don´t worry!</h1>
                    <b>Follow the link</b>
                    <a href="${verificationLink}">${verificationLink}</a>
                    `, // html body
		});

		res.send({type: 'OK', message: 'check your email'});
	} catch (error) {
		res
			.status(500)
			.send({response: '', type: 'Internal server error.', message: error});
	}
}

async function createNewPassword(req, res) {
	const {newPassword} = req.body;
	const resetToken = req.headers.reset;

	if (!(resetToken && newPassword))
		return res.send({message: 'all fields are required'});

	try {
		let jwtPayload = jwt.verify(resetToken, 'top_secret');
		let user = await Users.findOne({resetToken});
		user.password = newPassword;
		await user.save();
		res.send({message: 'password changed'});
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
