const mongoose = require('mongoose');
const {NewsLetter} = require('../models/index');
const transporter = require('../middlewares/notifications');

async function suscribe(req, res) {
	const {email} = req.body;
	if (!email) return res.status(404).send({message: 'email is required'});
	let validEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
	if (!validEmail) return res.send({error: true, message: 'email not valid'});
	try {
		let newsletter = await NewsLetter.findOne();
		if (!newsletter) newsletter = await new NewsLetter();
		if (newsletter.emails.includes(email)) {
			return res.send({message: 'already suscribed'});
		}
		newsletter.emails.push(email);
		await newsletter.save();

		await transporter.sendMail({
			from: '"NewsLetter" <something>', // sender address
			to: email, // list of receivers
			subject: 'NewsLetter Subscribe', // Subject line
			html: `
            <h1>Congratulations</h1>
            <h2>You Are suscribed to the newsLetter of store!</h2>
                    `, // html body
		});
		res.send({message: 'suscribed to the newsLetter'});
	} catch (error) {
		res.status(500).send({message: error});
	}
}

async function unSuscribe(req, res) {
	const {email} = req.body;
	if (!email) return res.status(400).send({message: "there isn't an email"});
	let validEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
	if (!validEmail) return res.send({error: true, message: 'email not valid'});
	try {
		let newsletter = await NewsLetter.findOne();
		if (!newsletter) newsletter = await new NewsLetter();
		if (!newsletter.emails.includes(email)) {
			return res.send({message: 'email was already unSuscribed'});
		}
		newsletter.emails = newsletter.emails.filter((em) => em !== email);
		await newsletter.save();
		res.send({message: 'unSuscribed'});
	} catch (error) {
		res.status(500).send({message: error});
	}
}

module.exports = {
	suscribe,
	unSuscribe,
};
