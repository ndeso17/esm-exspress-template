import express from "express";
const router = express.Router();
import * as controllers from "../controllers/index.js";

router.get("/", controllers.home);

export default router;
