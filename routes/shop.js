import { Router } from "express";
import { getProducts } from "../controllers/products.js";

export const shopRouter = Router();

shopRouter.get("/", getProducts);
