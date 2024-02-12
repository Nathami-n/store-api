const mongoose = require("mongoose");

const { Schema, model} = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Must incude name"],
    trim: true,
    maxLength: [20, "cannot exceed 20 characters"],
  },
  price: {
    type: Number,
    required: [true, "Must include price"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }, 
  company: {
    type: String,
    enum:{
        values: ['ikea', 'liddy','caressa', 'marcos'],
        message: '{VALUE} is not supported'
    }
  }
});

module.exports = model('Products', productSchema)