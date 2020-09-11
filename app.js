/**
 * initialize env variables
 */
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * import packages
 */
const express = require('express');

/**
 * create app
 */
const app = express();
const port = process.env.PORT | 3000;

app.use(express.static(path.resolve(__dirname, 'public')));

/**
 * define routes
 */
app.get('*', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

/**
 * start listening to app
 */
app.listen(port, () => {
  console.log(`App started on PORT : ${port}`);
});
