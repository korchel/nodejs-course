import { Product } from "../models/product.js";

export const getAddProductPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/add-product", {
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
  const { title, imageUrl, price, description } = req.body;
  const newProduct = new Product(title, imageUrl, price, description);
  newProduct.save();
  res.redirect("/admin/products");
};

export const getProductsPageForAdmin = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      products,
      title: "Admin products",
      path: "/admin/products",
    });
  });
};
