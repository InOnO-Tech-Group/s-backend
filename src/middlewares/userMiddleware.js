import httpStatus from "http-status";
import userRepository from "../modules/user/repository/userRepository.js";
export const isUserExistById = async (req, res, next) => {
    try {
      const user = await userRepository.findUserById(req.user._id);
      if (!user) {
        return res.status(httpStatus.NOT_FOUND).json({
          status: httpStatus.NOT_FOUND,
          message: "User not found!",
        });
      }
      req.user = user;
      return next();
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }
  };