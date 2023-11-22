import mongoose from "mongoose";
import droneServices from "../Services/droneServices.js";

const droneController ={
    createDrone: async(req,res) =>{
        const DroneData = req.body;

        try {
            const newDrone = await droneServices.createDrone(DroneData);
            res.json(newDrone);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getDrones: async (req, res) => {
        try {
          const drones = await droneServices.getDrone();
          res.json(drones);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },    
      getDroneById: async (req, res) => {
        const droneId = req.params.droneId;
    
        try {
          const drone = await droneServices.getDroneById(droneId);
          res.json(drone);
        } catch (error) {
          res.status(404).json({ error: error.message });
        }
      },
};

export default droneController;
