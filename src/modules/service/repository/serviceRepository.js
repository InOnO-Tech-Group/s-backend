import Service from "../../../database/models/services.js";

const findServiceByName = async (name) => {
  return await Service.findOne({ name });
};
const createService = async (serviceData) => {
  return await Service.create(serviceData);
};
const findAllServices = async () => {
  return await Service.find();
};
const findServiceById = async (id) => {
  return await Service.findById(id);
};

export default {
  findServiceByName,
  createService,
  findAllServices,
  findServiceById,
};
