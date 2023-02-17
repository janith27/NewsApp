import User from "../model/User";
import bcrypt from "bcryptjs";
// Get all data of user
export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json({ users });
};
// End function

// register
export const signup = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "User Already exist" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    email,
    password: hashedPassword,
  });

  try {
    user.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ user });
};
// end function

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "Could not find user" });
  }
  const isPaswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPaswordCorrect) {
    return res.status(400).json({ message: "Incorrect Passward" });
  }
  return res.status(200).json({ message: "Login Succesfull" });
};
