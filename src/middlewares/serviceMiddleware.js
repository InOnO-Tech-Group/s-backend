import serviceRepository from "../modules/service/repository/serviceRepository";
import httpStatus from "http-status";

export const isSameService = async (req, res, next) => {
  try {
    const { serviceName } = req.body;
    const service = await serviceRepository.findServiceByName(serviceName);
    if (service) {
      return res.status(httpStatus.BAD_REQUEST).json({
        status: httpStatus.BAD_REQUEST,
        message:
          "Service already exists, Try editing description if is the case!",
      });
    }

    return next();
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
