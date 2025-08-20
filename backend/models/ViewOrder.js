import mongoose from "mongoose";

const vieworderSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true }, // Use Number instead of Double
  status: { type: String, enum: ["Pending", "Shipped", "Delivered", "Cancelled", "Returned"], default: "Pending" },
  year: { type: String },
  imageUrl: { type: String },
  seller: { type: String },
  paymentMode: { type: String, enum: ["UPI", "Credit Card", "Debit Card", "Net Banking", "COD"] },
  recipientName: { type: String },
  deliveryAddress: { type: String },
  phone: { type: String, match: /^[0-9]{10}$/ },
  deliveryDate: { type: String },
  placedDate: { type: String },
  deliveredDate: { type: String },
  cancellationReasons: { type: String },
  cancellationImage: { type: String },
  returnReasons: { type: String },
  returnImage: { type: String }
}, { timestamps: true });

export const ViewOrder = mongoose.model("ViewOrders", vieworderSchema);
