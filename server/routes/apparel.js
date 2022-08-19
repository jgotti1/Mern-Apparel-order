import express from "express";
import { getApparel } from "../controllers/apparel.js";
import { createApparel } from "../controllers/apparel.js";
import { deleteApparel } from "../controllers/apparel.js";
import { updateApparel } from "../controllers/apparel.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();
router.use(requireAuth);

router.get("/", getApparel);
router.post("/", createApparel);
router.delete("/:id", deleteApparel);
router.patch("/:id", updateApparel);
router.put("/:id", updateApparel);

export default router;
