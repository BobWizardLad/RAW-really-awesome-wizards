const express = require('express');
const app = express();

const PORT = 8080;

app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/public/assets'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log('Server listening on http://localhost:' + PORT);
});