import express, { Router } from "express";
import path from "path";

const __dirname = import.meta.dirname;
export const adminRouter = Router();
export const products = [];
adminRouter.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

adminRouter.post("/add-product", (req, res, next) => {
  const { title } = req.body;
  products.push({ title });
  res.redirect("/");
});
