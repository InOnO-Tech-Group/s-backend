import serviceRepository from "../repository/serviceRepository.js";
import httpStatus from "http-status";

const createNewService = async (req, res) => {
  try {
    const serviceData = req.body;

    const service = await serviceRepository.createService(serviceData);

    return res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message: "New service added  successfully.",
      data: service,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
const getAllServices = async (req, res) => {
  try {
    return res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message: "Services Retrieved  successfully.",
      data: req.services,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
const getSingleServiceById = async (req, res) => {
  try {
    return res.status(httpStatus.CREATED).json({
      status: httpStatus.CREATED,
      message: "Service retrieved  successfully.",
      data: req.service,
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
export default { createNewService, getAllServices, getSingleServiceById };
