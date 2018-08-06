const express = require('express');
const nodemailer = require('nodemailer');
const request = require('superagent');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));

const validateEmail = email => {
 	let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};

// Routes
app.post('/news', (req, res) => {
	if(!validateEmail(req.body.email)) {
		return res.send('Invalid Email');
	}

	const apiKey = 'hi there';
	const listId = 'i used to always upload my api keys to git hub oops lmao';
	const serverInstance = 'us15';
	request
		.post('https://' + serverInstance + '.api.mailchimp.com/3.0/lists/' + listId + '/members/')
		.set('Content-Type', 'application/json;charset=utf-8')
		.set('Authorization', 'Basic ' + new Buffer('any:' + apiKey ).toString('base64'))
		.send({
			'email_address': req.body.email,
			'status': 'subscribed'
		})
		.end((err, response) => {
			if (response.status < 300 ||
				 (response.status === 400 && response.body.title === 'Member Exists')) {
				console.log('Signed Up!');
				res.send('Signed Up!');
			} else {
				console.log('Sign Up Failed :(');
				res.send('Sign Up Failed :(');
			}
		});
});

app.post('/contact', (req, res) => {
	if(!validateEmail(req.body.email)) {
		console.log('Invalid Email, ' + req.body.email);
		return res.send('Invalid Email, ' + req.body.email);
	}

	const transportConfig = {
		host: 'imap.dreamhost.com',
  	auth: {
  		user: 'contact@starterhacks.ca',
  		pass: 'heyo girl'
  	}
	};

	const youveGotMail = {
  	from: req.body.email,
  	to: 'contact@starterhacks.ca',
  	subject: req.body.subject,
  	text: req.body.message
	};

	const transporter = nodemailer.createTransport(transportConfig);

	transporter.sendMail(youveGotMail, (error, info) => {
  	if (error) {
  		res.send(error);
  	} else {
  	  res.send('Email sent: ' + info.response);
  	}
	});
});

app.listen(8080, () => console.log('Listening on port 8080!'));
