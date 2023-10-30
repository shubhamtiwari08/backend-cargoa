const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePictureUrl: String,
  firstname: String,
  lastname: String,
}, {
  timestamps: true,
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = { Vendor };
