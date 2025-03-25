import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;
const pathToFile = path.join(__dirname, "../", "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(pathToFile, (err, content) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(content));
  });
};

export class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(pathToFile, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}
