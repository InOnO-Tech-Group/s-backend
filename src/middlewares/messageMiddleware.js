import httpStatus from "http-status";
import messageRepository from "../modules/message/repository/messageRepository.js";

export const isMessagesExist = async (req, res, next) => {
  try {
    const messages = await messageRepository.findAllMessages();
    if (!messages || messages.length < 1) {
      return res.status(httpStatus.BAD_REQUEST).json({
        status: httpStatus.BAD_REQUEST,
        message: "No message found",
      });
    }
    req.messages = messages;
    return next();
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
