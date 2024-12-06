import httpStatus from "http-status";

const viewUserProfile = async (req, res) => {
  try {
   
    return res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
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
export default {viewUserProfile}