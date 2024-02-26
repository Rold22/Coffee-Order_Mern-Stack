const express = require('express');
const router = express.Router();

const {
  createOrder,
  getAllOrder,
  deleteOrder,
}
  = require('../controllers/orderController');

router.post("/", createOrder);
router.get("/orders", getAllOrder)
router.delete("/:id", deleteOrder)

module.exports = router;