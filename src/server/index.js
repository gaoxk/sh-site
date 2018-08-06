const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));

app.post('/contact', (req, res) => {
	console.log('can anyone hear me?');

	console.log(req.body);

	const transportConfig = {
		host: 'pop.dreamhost.com',
  	auth: {
  		user: 'contact@starterhacks.ca',
  		pass: 'PHEW LAD'
  	}
	};

	const sendEmail = {
  	from: 'contact@starterhacks.ca',
  	to: 'contact@starterhacks.ca',
  	subject: req.subject,
  	text: req.message
	};

	const transporter = nodemailer.createTransport(transportConfig);

	transporter.sendMail(sendEmail, (error, info) => {
  	if (error) {
  		console.log(error);
  	} else {
  		console.log('Email sent: ' + info.response);
  	}
	});
});

app.listen(8080, () => console.log('Listening on port 8080!'));
