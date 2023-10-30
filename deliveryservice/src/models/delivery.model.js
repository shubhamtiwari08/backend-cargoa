const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  document: {
    type: String,
    required: true,
    unique: true,
  },
  productName: {
    type: String,
    required: true,
  },
  Quantity: Number,
  shippingDate: Date,
  vendorName:String,
}, {
  timestamps: true,
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = { Delivery };
