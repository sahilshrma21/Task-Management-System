import bcrypt from "bcrypt"; // Import bcrypt to hash the password
import jwt from "jsonwebtoken"; // Import jsonwebtoken to generate a token
import UserModel from "../models/userModel.js"; // Import the User model
import validator from "validator"; // Import validator to validate email

const createToken = (id) =>{
  return jwt.sign({id},process.env.JWT_SECRET_KEY)

}
//Route for user login 
const loginUser = async (req, res) => {
          try {
            const { email, password } = req.body;
            const user = await UserModel.findOne({ email });

            if (!user) {
              return res.status(401).json({success:false, message: "User does't exists "});
              }
              const isValidPassword = await bcrypt.compare(password, user.password);
              if (isValidPassword) {
                const token = createToken(user._id);
                  res.json({success:true, token });
                }else{
                  res.json({success:false , message: 'Invalid crendiatial'})
                }
                  } catch (err) {
                    console.error(err);
                    res.status(500).json({ message: 'Internal Server Error' });
                 }
  };


// Route for user register 
const registerUser = async (req, res)=>{
   try {
    const { name, email, password } = req.body;
    // checking already exists or not 
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({success:false, message: 'Email already exists' });
      }
      //validating email and password

      if(!validator.isEmail(email)){
        return res.json({success:false, message: 'Invalid email' });
      }

      if(password.length < 0 ){
        return res.json({success:false, message: 'Password should be at least 8 characters long'})
      }
      // hashing password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      // creating new user
      const newUser = await UserModel.create({ name, email, password: hashedPassword });
      const user =await newUser.save();
      // sending token to user
      const token = createToken(user._id);
        res.json({ success: true, token, message: 'User created successfully' });
       


    
   } catch (error) {
    console.log(error);
    res.json({success : false,message});
    
   }
}

//Route for the adim login 
const adminLogin = async (req,res) => {
  try {
    const {email,password} = req.body;

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password,process.env.JWT_SECRET);
      res.json({success:true,token})
    }else{
      res.json({success:false,message:"Invalid credentials"})
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });

    
  }
  
}

export {loginUser , registerUser,adminLogin}