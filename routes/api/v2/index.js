import { Router } from "express";
import homeRoutes from "./home.js";

const router = Router();
router.use("/home", homeRoutes);
// router.use("/lists", listRoutes);

export default router;

