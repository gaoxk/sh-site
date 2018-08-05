const express = require('express');

const app = express();

app.use(express.static('dist'));
app.get('/hello/world', (req, res) =>
	res.send({ hello: 'world' })
);
app.listen(8080, () => console.log('Listening on port 8080!'));
