import User from "../../../database/models/users.js";

const findUserById = async (id)=>{
    return await User.findById(id)
}
export default {findUserById}