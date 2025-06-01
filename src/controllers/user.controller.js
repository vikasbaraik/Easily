import { authenticateUser, registerUser } from "../models/user.model.js";

export default class UserController {
  register = (req, res, next) => {
    res.render("register");
  };

  login = (req, res, next) => {
    res.render("login");
  };

  registerUser = (req, res) => {
    const status = registerUser(req.body);
    if (status) return res.render("login");
  };

  loginUser = (req, res) => {
    const isAuth = authenticateUser(req.body);
    if (isAuth) {
      req.session.userEmail = req.body.email;
      res.render("home-page", { message: "login successfull" });
    } else {
      res.render("login", { message: "login failed" });
    }
  };

  logoutUser = (req, res) => {
    req.session.destroy((err) => {
      if (err) res.status(401).send(err);
      else res.redirect("/");
    });
  };
}
