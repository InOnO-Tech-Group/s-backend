import User from "../../../database/models/users.js";

const findUserByAttribute = async (key, value) => {
    const user = await User.findOne({ [key]: value });
    return user;
}

export default { findUserByAttribute }