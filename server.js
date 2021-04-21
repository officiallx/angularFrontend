const expresss = require('express');
const http = require('http');
const path = require('path');
const request = require('request');

const cor = require('cors');

const app = expresss();

app.use(cor());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(expresss.static('src/index.html'));
//app.use(express.static(path.join(__dirname, './dist/my-catering-app')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'src/index.html'));
});

app.post('*', (req, res) => {
  res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const port = process.env.PORT || 4200;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running on port root folder ko 4200'));
