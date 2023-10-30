const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

const User = mongoose.model('User', userSchema);

module.exports = { User };
