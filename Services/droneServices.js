import Drone from '../model/droneModel.js';

const droneServices = {
    createDrone : async(DroneData) =>{
        try {
            const newDrone = new Drone(DroneData);
            await newDrone.save();
            return newDrone;
        } catch (error) {
            throw new Error('Internal Server Error');
        }
    },
    getDrone : async() =>{
        try {
            return await Drone.find({},{_id :0,__v:0});
        } catch (error) {
            throw new Error('Internal list Server Error');
        }
    },
    getDroneById: async (droneId) => {
        try {
          const drone = await Drone.findById(droneId, { _id: 0, __v: 0 });
    
          if (!drone) {
            throw new Error('Drone not found');
          } else {
            return drone;
          }
        } catch (error) {
          throw error;
        }
      },
};

export default droneServices;