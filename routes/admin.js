import express, { Router } from "express";
import path from "path";

const __dirname = import.meta.dirname;
export const adminRouter = Router();
export const products = [];
adminRouter.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    products,
    title: "add product",
    path: "/admin/add-product",
    activeAddProduct: true,
    isForm: true,
    isProduct: true,
  });
});

adminRouter.post("/add-product", (req, res, next) => {
  const { title } = req.body;
  products.push({
    title,
  });
  res.redirect("/");
});
