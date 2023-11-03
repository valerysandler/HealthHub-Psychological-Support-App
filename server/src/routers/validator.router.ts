import { Router } from "express";
import { validatorController } from "../controllers/validator.controller";



const router = Router();
router.get("/", (req, res) => res.send("Validator router"));

router.post("/", validatorController.validator);

export const validatorRouter = router;