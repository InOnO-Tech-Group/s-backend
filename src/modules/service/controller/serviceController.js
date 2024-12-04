import serviceRepository from "../repository/serviceRepository.js";
import httpStatus from "http-status"

const createNewService = async (req, res) => {
    try {
      const serviceData = req.body;
  
      const service = await serviceRepository.createService(
        serviceData
      );
  
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

  export default {createNewService}