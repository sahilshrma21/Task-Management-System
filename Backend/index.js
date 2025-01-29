import connectDB from "./config/db.js";
import express from 'express' 
import cors from 'cors'
import 'dotenv/config'
import userRouter from './routes/userRoutes.js'
import TaskRouter from "./routes/TaskRouter.js";

//app Config 
const app = express();
const port = process.env.PORT || 5000;
connectDB();


//middleswares

app.use(express.json());
app.use(cors());

//api endpoint 
app.use('/api/user',userRouter);
app.use('/taskRoute',TaskRouter)

app.get('/',(req,res) => {
  res.send("API Working");
})

app.listen(port , ()=> console.log('server started on port : ' +  port));