import { Router } from "express";
import roleController from "../controllers/role.controller";

const router = Router();


router.post('/spec', roleController.specialistRole);
router.post('/patient', roleController.patientRole);
router.post('/admin', roleController.adminRole);

export const roleRouter = router;
