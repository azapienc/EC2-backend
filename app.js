const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    msg: 'express backend test'
  });
});

app.listen(4000);
