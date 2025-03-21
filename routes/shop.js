import express, { Router } from "express";
import path from "path";
import { products } from "./admin.js";

const __dirname = import.meta.dirname;

export const shopRouter = Router();

shopRouter.get("/", (req, res, next) => {
  res.render("shop", {
    products,
    title: "shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    isProduct: true,
  });
});
