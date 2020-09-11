const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WishSchema = new Schema({
  wish: {
    type: String,
  },
  ip: {
    type: String,
  },
  created_at: {
    type: String,
  },
});

const WishModel = mongoose.model('Wish', WishSchema);

module.exports = WishModel;
