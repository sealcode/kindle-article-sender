const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      port = 8000;

const app = express();

app.use(express.static(path.join(__dirname, 'src')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

app.listen(port, () => {
  console.log('Dev server on port: ' + port);
});