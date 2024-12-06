import Message from "../../../database/models/messages.js";
const createMessage = async (messageData) => {
  return await Message.create(messageData);
};
const findAllMessages = async ()=>{
    return Message.find();
}
export default { createMessage,findAllMessages };
