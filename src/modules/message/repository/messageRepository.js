import Message from "../../../database/models/messages.js";
const createMessage = async (messageData) => {
  return await Message.create(messageData);
};
const findAllMessages = async ()=>{
    return await Message.find();
}
const findMessageById = async (id)=>{
    return Message.findById(id);
}
const updateMessage = async (id) => {
  return await Message.findByIdAndUpdate(
    id,
    { $bit: { isRead: { xor: 1 } } },
    { new: true }
  );
};
const deleteMessage = async (id)=>{
    return await Message.findByIdAndDelete(id)
}

export default { createMessage,findAllMessages,findMessageById,updateMessage,deleteMessage };
