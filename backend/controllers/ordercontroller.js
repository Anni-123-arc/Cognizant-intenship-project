import { ViewOrder } from "../models/ViewOrder.js"; 

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await ViewOrder.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get single order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await ViewOrder.findOne({ id: req.params.id });
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Update order status (Cancel / Return)
export const updateOrderStatus = async (req, res) => {
  try {
    const { status, reasons } = req.body;
    const order = await ViewOrder.findOne({ id: req.params.id });
    if (!order) return res.status(404).json({ error: "Order not found" });

    order.status = status;
    if (status === "Cancelled") order.cancellationReasons = reasons;
    if (status === "Returned") order.returnReasons = reasons;

    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
