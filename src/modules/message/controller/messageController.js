import { sendEmail } from "../../../services/sendEmail.js";
import messageRepository from "../repository/messageRepository.js";
import httpStatus from "http-status";

const createNewMessage = async (req, res) => {
  try {
    const messageData = req.body;

    const message = await messageRepository.createMessage(messageData);
    const username = req.body.names.split(' ')[0];
    await sendEmail(req.body.email, 'Thanks for your message', `
    
    Thanks for your message, we will reach out to you soon!`, 'Message received successfully', username);

    return res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message: "Message Sent Successfully.",
      data: message,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const viewAllMessages = async (req, res) => {
  try {
    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "Messages retrieved successfully.",
      data: req.messages,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
const viewSingleMessage = async (req, res) => {
  try {
    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "Message retrieved successfully.",
      data: req.message,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
const markReadMessage = async (req, res) => {
  try {
    const message = await messageRepository.updateMessage(req.message._id);
    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "Message marked read successfully.",
      data: message,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
const deleteMessage = async (req, res) => {
  try {
    await messageRepository.deleteMessage(req.message._id);
    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "Message deleted successfully!",
      data: req.messages,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
export default {
  createNewMessage,
  viewAllMessages,
  viewSingleMessage,
  markReadMessage,
  deleteMessage,
};
