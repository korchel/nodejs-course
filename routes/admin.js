import { Router } from "express";
import {
  getAddProductPage,
  postProduct,
  getProductsPageForAdmin,
} from "../controllers/admin.js";

export const adminRouter = Router();

adminRouter.get("/add-product", getAddProductPage);

adminRouter.get("/products", getProductsPageForAdmin);

adminRouter.post("/add-product", postProduct);
