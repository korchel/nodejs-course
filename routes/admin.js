import { Router } from "express";
import { getAddProductPage, postProduct } from "../controllers/products.js";

export const adminRouter = Router();

adminRouter.get("/add-product", getAddProductPage);

adminRouter.post("/add-product", postProduct);
