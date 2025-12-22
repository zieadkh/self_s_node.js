import USER from "../modules/userInfo.js";
import { genToken } from "../utils/generatetoken.js";
import bcrypt from "bcrypt";

export async function userSginUp (req, res ) {
  try {
    const {username, password, email} = req.body;
    const userExists = await USER.findOne({email: email.toLowerCase()});
    if(userExists) res.status(400).json({message: "user already exists!!"});
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

export async function signin (req, res) {
  try {
    const {email, password} = req.body;
    const userExists = await USER.findOne({email: email.toLowerCase()});
    if(!userExists) res.status(404).json({message: "incorrect email or password!"})
    const passMatch = await bcrypt.compare(password, userExists.password);
    if (passMatch) {
      const token = genToken(userExists.id, res);
      res.status(200).json({masssage: "user authenticated", token})
    }
  } catch (error) {
    res.status(409).json({error: error.message});
  }
}

export async function signout (req, res) {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0)
  });
  res.status(200).json({message:"User looger OUT successfully!"});
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