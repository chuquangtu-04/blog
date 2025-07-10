import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import morgan from "morgan";
import route from "./routes/index.js";
const app = express();
const __dirname = path.resolve();
// app.use(morgan("combined"));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./src/resources/views");

app.use(express.static(path.join(__dirname, "src", "public")));

//Routes init
route(app);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
