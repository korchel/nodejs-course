import { Product } from "../models/product.js";

export const getAddProductPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("add-product", {
      products,
      title: "add product",
      path: "/admin/add-product",
      activeAddProduct: true,
      isForm: true,
      isProduct: true,
    });
  });
};

export const postProduct = (req, res, next) => {
  const { title } = req.body;
  const newProduct = new Product(title);
  newProduct.save();
  res.redirect("/");
};

export const getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      products,
      title: "shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      isProduct: true,
    });
  });
};
