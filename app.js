/**
 * initialize env variables
 */
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * import packages
 */
const express = require('express');
const mongoose = require('mongoose');

/** Connect to MongoDB */
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if (err) throw err;

  console.log('connected to MongoDB');
});

/**
 * create app
 */
const app = express();
const port = process.env.PORT | 3000;

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * define routes
 */
require('./routes/router')(app);

/**
 * start listening to app
 */
app.listen(port, () => {
  console.log(`App started on PORT : ${port}`);
});
