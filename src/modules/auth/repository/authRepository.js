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

export default { findUserByAttribute, saveSession }