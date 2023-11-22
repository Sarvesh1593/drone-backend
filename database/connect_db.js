import mongoose from "mongoose";

const connectdb = async() =>{
    try{
        const conn = await mongoose.connect(`mongodb+srv://21239:X3c47LYMh5RXn58U@cluster3.jikx7oa.mongodb.net/?retryWrites=true&w=majority`,{
        });
        console.log("mongodb connected");
    }catch(err){
        console.log(err);
    }
};

export default connectdb;


