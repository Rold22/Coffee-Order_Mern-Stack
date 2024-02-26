const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  dbNumber: {
    type: Number,
  },
  date:{
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
},
  { timestamps: true }
)

module.exports = mongoose.model('Order', orderSchema)