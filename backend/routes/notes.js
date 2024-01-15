import { Router } from "express";

// router is an object that will be used to define the available routes
const router = Router();

router.get("/", (req, res) => {
  res.json(["notes"]);
});

export default router;
