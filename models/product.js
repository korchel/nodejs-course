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
  constructor(title) {
    this.title = title;
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
