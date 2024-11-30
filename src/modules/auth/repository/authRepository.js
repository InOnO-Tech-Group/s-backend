import Session from "../../../database/models/sessions.js";
import User from "../../../database/models/users.js";

const findUserByAttribute = async (key, value) => {
    const user = await User.findOne({ [key]: value });
    return user;
}

const saveSession = async (data) => {
    const session = await Session.create(data);
    return session;
}

const findSessionBy2Attributes = async (key1, value1, key2, value2) => {
    const session = await Session.findOne({ [key1]: value1, [key2]: value2 });
    return session;
}

const updateUser = async (_id, data) => {
    const updatedUser = await User.findByIdAndUpdate(_id, data, { new: true });
    return updatedUser;
}
const deleteSession = async (_id) => {
    await Session.findByIdAndDelete(_id);
}

export default {
    findUserByAttribute,
    saveSession,
    findSessionBy2Attributes,
    updateUser,
    deleteSession
}