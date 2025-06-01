// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here

import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import UserController from "./src/controllers/user.controller.js";
import session from "express-session";
// import { auth } from "./src/middleware/auth.js";
import { renderHomePage } from "./src/controllers/home.controller.js";

const userController = new UserController();

const app = express();

app.use(
  session({
    secret: "simplepassword",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

app.get("/", renderHomePage);

// app.get("/", auth, userController.getSecure);

app.get("/register", userController.register);
app.get("/login", userController.login);

app.post("/register", userController.registerUser);
app.post("/login", userController.loginUser);
app.get("/logout", userController.logoutUser);

export default app;
