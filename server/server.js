const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();

app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
})

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);