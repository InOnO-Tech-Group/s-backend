import httpStatus from "http-status";
import userRepository from "../repository/userRepository.js";

const viewUserProfile = async (req, res) => {
  try {

    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "User profile retrieved successFully.",
      data: req.user,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
const updateUserProfile = async (req, res) => {
  try {
    const userData = req.body
    const user = await userRepository.updateUserProfile(req.user._id, userData)
    return res.status(httpStatus.OK).json({
      status: httpStatus.OK,
      message: "User profile updated successFully.",
      data: user,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
export default { viewUserProfile, updateUserProfile }