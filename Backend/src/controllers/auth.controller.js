import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import {asyncHandler, ApiResponse, ApiError} from "../utils/index.js"

const options = {
  httpOnly: true,
  secure: true,
  sameSite: "None",
  path:"/"
}

const signup = asyncHandler(async(req, res)=>{

  const {fullName, email, password} = req.body;

  if(!fullName || !email || !password) throw new ApiError(400, "All Fields are required");

  const existedUser = await User.findOne({email})
  if(existedUser) throw new ApiError(409, "User already exists");

  const user = await User.create({
    fullName, email, password
  })

  const createdUser = await User.findById(user._id).select("-password");

  if(!createdUser) throw new ApiError(500, "Failed to create user");

  const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE_IN})

  return res.status(201)
  .cookie("token", token, options)
  .json(new ApiResponse(201, createdUser, "User registered successfully"))

})

const login = asyncHandler(async(req, res)=>{

})

const logout = asyncHandler(async(req, res)=>{

})

export{
  signup,
  login,
  logout
}