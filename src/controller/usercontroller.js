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



