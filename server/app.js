const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const angularDistPath = path.join(__dirname, '../dist/cv-angular/browser');

app.use(express.static(angularDistPath));

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(angularDistPath, 'index.html'));
});

const emailRouter = require('./email');

app.use(bodyParser.json());
app.use('/email',emailRouter);

module.exports = app;
