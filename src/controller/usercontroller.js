import USER from "../modules/userInfo.js";

export async function userSginUp (req, res ) {
  try {
    const {username, password, email} = req.body;
    const user = await USER.create({
      username,
      password,
      email,
    });
    res.status(201).json({message: "user created", user});
  } catch (error) {
    res.status(500).json({message:"check your code, bitch!"}, error.message);
  }
}


export async function deleteUser (req, res) {
  try {
    const deleted = await USER.findByIdAndDelete(req.params.id);
    if(deleted){
      res.status(200).json({message:`${deleted} was deleted successfully!`});
    }else{
      res.status(404).json({message:`USER was not found!!`});
    }
  } catch (error) {
    res.status(500).json({message: "check you code!!"});
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