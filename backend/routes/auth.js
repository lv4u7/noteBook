import { Router } from "express";
import User from "../models/User.js";
// router is an object that will be used to define the available routes
const router = Router();

//Create a user using: POST "/api/auth". Doesn't require Auth
router.get("/", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user.save();
  res.json(req.body);
});

export default router;
