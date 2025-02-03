import mongoose from 'mongoose';
import {DB_name} from '../Constants.js';


const connectDB = async () => {
   try { 
    mongoose.connection.on('connected',()=>{
      console.log('Mongodb connected');
    })
   await mongoose.connect(`${process.env.MONGO_URI}/${DB_name}`)


} catch (error) {
    console.error(`Mongodb connetions Error: ${error.message}`);
   }
}

export default connectDB;
