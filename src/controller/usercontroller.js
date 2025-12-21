import USER from "../modules/userInfo.js";
import { genToken } from "../utils/generatetoken.js";

export async function userSginUp (req, res ) {
  try {
    const {username, password, email} = req.body;
    const exists = await USER.findOne({email: email});
    if(exists) res.status(400).json({message: "user already exists!!"});
    const newUser = await USER.create({
      username,
      password,
      email
    });
//jwt authrization
    const token = genToken(newUser.id, res);

    res.status(201).json({message: "user created", newUser , token});
  } catch (error) {
    res.status(500).json({message:"check your code, bitch!", error: error.message});
  }
}


export async function deleteUser (req, res) {
  try {
    const deleted = await USER.findByIdAndDelete(req.params.id);
    if(deleted){
      res.status(200).json({deleted, message:`user was deleted SUCCESSFULLY!`});
    }else{
      res.status(404).json({message:`USER was not found!!`});
    }
  } catch (error) {
    res.status(500).json({message: "check you code!!", error: error.message});
  }
}


export async function allUsers (req, res) {
  try {
    const all = await USER.find();
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json({message:"code failure, check code!!!"});
  }
}