import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getOrders,
  getOrderById,
  getOrdersByUserId,
  createOrder,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/", authMiddleware, getOrders);
router.get("/user/:userId", authMiddleware, getOrdersByUserId);
router.get("/:id", authMiddleware, getOrderById);

router.post("/", authMiddleware, createOrder);
router.put("/:id", authMiddleware, updateOrderStatus);
router.delete("/:id", authMiddleware, deleteOrder);

export default router;
