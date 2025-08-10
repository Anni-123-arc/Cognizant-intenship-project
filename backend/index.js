import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {orderRouter} from "./routers/ordersRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", orderRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});