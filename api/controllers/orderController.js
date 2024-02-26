const Order = require('../models/Order');
const { StatusCodes } = require('http-status-codes')

const createOrder = async (req, res) => {
  try {
    const { id, name, dbNumber, date, time } = req.body;

    const newOrder = new Order({
      id,
      name,
      dbNumber,
      date,
      time,
    })

    const savedOrder = await newOrder.save();
    res.status(StatusCodes.CREATED).json(savedOrder);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({error: 'An error occurred while creating the orders'})
    
  }
} 

const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(StatusCodes.OK).json(orders)
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
}

const deleteOrder = async (req, res) =>{
  try {
    const deleteOrder = await Order.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json(deleteOrder)
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({error: 'There is something wrong with the deletion'})
  }
}
module.exports = {
  createOrder,
  getAllOrder,
  deleteOrder
}