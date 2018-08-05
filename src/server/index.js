const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));

app.post('/contact', (req, res) => {
	console.log(req.body);

	let transporter = nodemailer.createTransport({
  	service: 'mail.starterhacks.ca',
  	auth: {
  		user: 'contact@starterhacks.ca',
  		pass: 'some password'
  	}
	});

	let sendEmail = {
  	from: req.email,
  	to: 'contact@starterhacks.ca',
  	subject: req.subject,
  	text: req.message
	};
  
	/* to be completed
  transporter.sendMail(sendEmail, (error, info) => {
  	if (error) {
  		console.log(error);
  	} else {
  		console.log('Email sent: ' + info.response);
  	}
  });
  */
});

app.listen(8080, () => console.log('Listening on port 8080!'));
