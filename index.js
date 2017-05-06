const express = require('express');


const app = express();


app.use(express.static(__dirname));

app.get('/', (req, res) => {
  console.log('Request');
  return res.sendFile(__dirname + '/index.html');
});


app.listen(3000, console.log.bind(console, 'Up'));
