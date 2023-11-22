import express from "express";
import droneController from "../Controllers/droneController.js";

const router = express.Router();

router.post('/create',droneController.createDrone);
router.get('/list',droneController.getDrones);
router.get('/:droneId',droneController.getDroneById);

export default router;