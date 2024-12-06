import Message from "../../../database/models/messages.js";
const createMessage = async (messageData) => {
  return await Message.create(messageData);
};
export default { createMessage };
