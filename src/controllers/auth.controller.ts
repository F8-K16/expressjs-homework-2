import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export const authController = {
  showLogin(req: Request, res: Response) {
    if (req.session.user) {
      return res.redirect("/");
    }

    res.render("login");
  },

  login(req: Request, res: Response) {
    if (req.session.user) {
      return res.redirect("/");
    }

    const { email, password } = req.body;

    try {
      const user = authService.login(email, password);
      req.session.user = user;
      req.flash("success", "Đăng nhập thành công");
      res.redirect("/");
    } catch (err) {
      if (err instanceof Error) {
        req.flash("error", err.message);
        return res.redirect("/login");
      }
    }
  },

  home(req: Request, res: Response) {
    if (!req.session.user) {
      return res.redirect("/login");
    }

    res.render("home", {
      name: req.session.user.name,
    });
  },

  logout(req: Request, res: Response) {
    delete req.session.user;
    req.flash("success", "Đăng xuất thành công");
    res.redirect("/login");
  },
};
