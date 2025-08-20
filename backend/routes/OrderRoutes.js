import express from "express";
import { getAllOrders, getOrderById, updateOrderStatus } from "../controllers/ordercontroller.js";

const router = express.Router();

router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.put("/:id/status", updateOrderStatus);

export default router;
