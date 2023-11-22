import mongoose from "mongoose";


const droneSchema = new mongoose.Schema({
    userId:{
        type : mongoose.Types.ObjectId
    },
    name :{
        type : String,
        required : true
    },
    batteryStatus: {
        type : Number
    },
    latitude: {
        type : Number
    },
    longitude: {
        type : Number
    },
    boundaryAlerts :{
        type : Boolean
    }
},{
    timestamps : true,
});

const Drone = mongoose.model('model',droneSchema);

export default Drone;
