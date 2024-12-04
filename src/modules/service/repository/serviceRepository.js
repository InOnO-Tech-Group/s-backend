import Service from "../../../database/models/services";

const findServiceByName = async (name)=>{
    return await Service.findOne({name})
}

export default {findServiceByName}