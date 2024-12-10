import User from "../../../database/models/users.js";

const findUserById = async (id) => {
  return await User.findById(id);
};
const updateUserProfile = async (id, userData) => {
    return await User.findByIdAndUpdate(id,userData,{new:true})
};
export default { findUserById, updateUserProfile };
