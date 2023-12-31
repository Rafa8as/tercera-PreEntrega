import mongoose from "mongoose";
import config from "../src/config/enviroment.config.js";


const mongoUrl = config.MONGO_URL;

const environment = async ()=>{
    try{
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log ("mongo connected");

    }catch (err) {
        console.log("mongo error:", err);

    };
};

export default environment;