import { Router } from "express";
import User from "../models/User.js";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { fetchuser } from "../middleware/fetchuser.js";

const JWT_SECRET = "mee464";
// router is an object that will be used to define the available routes
const router = Router();

//Create a user using: POST "/api/auth/createuser". Doesn't require Auth / no loig required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 5").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    //400 bad request with errors
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    try {
      //check if the user with this email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "user with same email exists" });
      }
      //salt ko password k sath add kr k hash kren gy
      const salt = await bcrypt.genSalt(10);
      const pass = await bcrypt.hash(req.body.password, salt);
      //new user create kr k save kr den gy
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: pass,
      });
      const data = {
        user: { id: user.id },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      console.log(authToken);

      res.status(200).json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("an error occured");
    }
  }
);

// endpoint Auth a user: POST "/api/auth/login"
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cant be blank").exists(),
  ],
  async (req, res) => {
    const result = validationResult(req);
    //400 bad request with errors
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    
    const {email,password} = req.body;
    try {
      let user = await User.findOne({email});
      if(!user) {
        return res.status(400).json({msg:"Invalid...!"});
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch){
        return res.status(400).json({msg:"Invalid...!"});
      }

      const data = {
        user :{
          id:user.id,
        }
      }

      const authToken = jwt.sign(data,JWT_SECRET);
      res.json({authToken});

    } catch (error) {
      console.error(error.message);
      res.status(500).send("an error occured");
    }
  })


  // endpoint get a users' details : POST "/api/auth/getuser"
  //we need the authToken and using it we try to fetch the notes
  router.post("/getuser",fetchuser, async (req,res)=>{
  try {
    const userID = req.user.id;
    //we select all fields except the password -password
    const user = await User.findById(userID).select("-password");
    res.status(200).send(user);
  } catch (error) {
    console.error(error.message);
      res.status(500).send("an error occured");
  }
})

export default router;
