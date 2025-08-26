import { Router } from "express";

import { signup, login, logout } from "../controllers/auth.controller.js";
import protectedRoute from "../middleware/auth.middleware.js";

import User from "../models/user.model.js";

const route = Router()

route.post("/signup", signup)
route.post("/login", login)
route.post("/logout", logout)

export default route;