import { Router } from "express";
import {
  getCartPage,
  getCheckoutPage,
  getIndexPage,
  getProductsPage,
  getOrdersPage,
} from "../controllers/shop.js";

export const shopRouter = Router();

shopRouter.get("/", getIndexPage);
shopRouter.get("/products", getProductsPage);
shopRouter.get("/cart", getCartPage);
shopRouter.get("/orders", getOrdersPage);
shopRouter.get("/checkout", getCheckoutPage);
