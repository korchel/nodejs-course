import express from "express";
import bodyParser from "body-parser";
import { adminRouter } from "./routes/admin.js";
import { shopRouter } from "./routes/shop.js";
import path from "path";

const __dirname = import.meta.dirname;

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRouter);
app.use(shopRouter);
app.use((req, res, next) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

app.listen(3000);
