const express = require('express');
let app = express();

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/index.html');
});

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/test', (req, res) => {
  res.send('TEST');
});

app.get('/process_get', (req, res) => {

  // 输出 JSON 格式
  let response = {
    "first_name": req.query.first_name,
    "last_name": req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

let server = app.listen(8000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log(`Example app listening on http://${host}:${port}`);
});
