import express from "express";
import { engine } from "express-handlebars";
const app = express();
import path from "path";
const __dirname = path.resolve();

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./src/resources/views");

app.use(express.static(path.join(__dirname, "src", "public")));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/views", (req, res) => {
  res.render("views");
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
