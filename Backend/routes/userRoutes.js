import express from 'express'
import { loginUser , registerUser,adminLogin,getUserById,getUsers } from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);
userRouter.post('/admin', adminLogin);
//single user details
userRouter.get('/userdetails', getUserById);
//get all users
userRouter.get('/userslist', getUsers);
export default userRouter;
