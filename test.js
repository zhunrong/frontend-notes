const express = require('express');

const app = express();

app.get('*', (req, res) => {
  res.send(req.path);
})

app.listen(3000);