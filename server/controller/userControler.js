import User from "../model/UserModel.js";

//Post methos
export const create = async (req, res) => {
  try {
    const userData = new User(req.body);

    if (!userData) {
      return res.status(404).json({ msg: "user data not found" });
    }
    const data = await userData.save();
    res.status(200).json({...data,msg:"User added successfully!"});
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//get method
export const getAll = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData) {
      return res.status(404).json({ msg: "user data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//get one

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "user not found" });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//update data

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(401).json({ msg: "User not found" });
    }
    const updateData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({msg:"User updated successfully"});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};


//delete method

export const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(401).json({ msg: "User not found" });
    }
    await User.findByIdAndDelete(id)
    res.status(200).json({msg:"User daleted Sucssecfully" })
    
    } catch (error) {
        res.status(500).json({ msg: error });

    }
}