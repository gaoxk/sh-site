const express = require('express');
const nodemailer = require('nodemailer');
const request = require('superagent');
const bodyParser = require('body-parser');

const config = require('./config')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));

const validateEmail = email => {
    let email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regex.test(email);
};

// Routes
app.post('/news', (req, res) => {

    if(!validateEmail(req.body.email)) {
        return res.send('Invalid Email');
    }

    const apiKey = config.MAILCHIMP_API_KEY;
    const listId = config.MAILCHIMP_LIST_ID;
    const serverInstance = config.MAILCHIMP_SERVER_INSTANCE;

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
            pass: config.DREAMHOST_PASSWORD
        }
    };

    const email_message = {
        from: req.body.email,
        to: 'contact@starterhacks.ca',
        subject: req.body.subject,
        text: req.body.message
    };

    const transporter = nodemailer.createTransport(transportConfig);

    transporter.sendMail(email_message, (error, info) => {
        if (error) {
            res.send(error);
        } else {
            res.send('Email sent: ' + info.response);
        }
    });
});

app.listen(config.SERVER_PORT, () => console.log('Listening on port ' + config.SERVER_PORT));
