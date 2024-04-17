const User = require("../models/UserSchema");
const { StatusCodes } = require("http-status-codes");
const { hashPassword, comparePassword } = require("../utils/passwordUtils");
const {createJWT} = require('../utils/tokenUtils')

//create a user
const registerUser = async (req, res) => {
  //makes the 1st account register an Admin
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const newUser = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "User created" });
};

const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "invalid credentials" });
  }

const token = createJWT({userId:user._id, role:user.role, isProjectManager:user.isProjectManager})
const oneDay = 1000 * 60 * 60 *24

res.cookie  ('token',token,{
  httpOnly:true,
  expires: new Date(Date.now()+oneDay),
  secure: process.env.NODE_ENV === 'production'
})

  res.status(StatusCodes.OK).json({msg:'User logged in successfully'});
};

const logoutUser = async (req,res) => {
  res.cookie ('token', 'logout',{
    httpOnly:true,
    expires: new Date(Date.now())
  })
  res.status(StatusCodes.OK).json({msg:'Logged out successfully!'});

}

module.exports = { registerUser, loginUser, logoutUser };
