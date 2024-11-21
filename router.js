import express from "express";
import { getAllProject } from "./controllers.js";

const router = express.Router();

router.get("/", getAllProject);

export default router;
