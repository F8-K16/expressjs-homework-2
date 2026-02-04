import express from "express";
import session from "express-session";
import flash from "connect-flash";
import path from "node:path";
import indexRoute from "./routes/index.route";
import { flashMiddleware } from "./middlewares/flash.middleware";

const app = express();
const PORT: number = 3000;

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(flash());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(flashMiddleware);
app.use(indexRoute);

app.listen(PORT, () => {
  console.log(`Start server: http://localhost:${PORT}`);
});

export default app;
