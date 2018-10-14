const express = require('express');
const proxy = require('express-http-proxy');
const PORT = process.env.PORT || 3001;

const app = express();

app.use('/public', express.static(__dirname + '/client/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/channel.html', (req, res, next) => {
  const cacheExpire = 60 * 60 * 24 * 365 * 1000;
  res.setHeader('Pragma', 'public');
  res.setHeader('Cache-Control', `maxage=${cacheExpire}`);
  res.setHeader('Expires', new Date(Date.now() + 60*60*24*365*1000).toUTCString());
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send('<script src="https://e-cdns-files.dzcdn.net/js/min/dz.js"></script>');
});

app.get('*', (req, res, next) => {
  res.sendFile(__dirname + '/client/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});