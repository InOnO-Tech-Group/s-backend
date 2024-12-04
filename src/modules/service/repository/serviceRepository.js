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
const findSameService = async (id, name) => {
    return await Service.findOne({
      name: name,
      _id: { $ne: id },
    });
  };
  const updateService = async (id, serviceData) => {
    return await Service.findByIdAndUpdate(id, serviceData, {
      new: true,
    });
  };
  const deleteService = async (id)=>{
    return await Service.findByIdAndUpdate(id);
  }

export default {
  findServiceByName,
  createService,
  findAllServices,
  findServiceById,
  findSameService,
  updateService,
  deleteService
};
