import { Router } from "express";
import { validateCard } from "../controllers/card.controller";

const router = Router();

// POST /validate-card
router.post("/validate-card", validateCard);

export default router;
