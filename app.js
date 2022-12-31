const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    msg: 'Hello backend, second try '
  });
});

app.listen(3000);
