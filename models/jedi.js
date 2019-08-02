const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jediSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  companyName: {
    type: String,
    required: false
  },
  phoneNo: {
    type: String,
    required: false
  },
  isAdmin: {
    type: Boolean,
    required: true
  },
  businessNature: {
    type: String,
    required: false
  },
  position: {
    type: String,
    required: false
  },
});

module.exports = mongoose.model('Jedi', jediSchema);
