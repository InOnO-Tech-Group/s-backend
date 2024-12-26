import { hashPassword } from "../../helpers/authHelpers.js";
import User from "../models/users.js";

const seedUsers = async () => {
    const users = [
        {
            firstName: "Jean Pierre",
            lastName: "AKIMANA",
            username: "AKIMANA",
            email: "akimana.inono@gmail.com",
            phone: "0788888887",
            password: await hashPassword("password123"),
        },
        {
            firstName: "Mwitaba",
            lastName: "Anaclet",
            username: "mwitabaanaclet",
            email: "mwitabaanaclet@gmail.com",
            phone: "0788458307",
            password: await hashPassword("password123"),
        },
        {
            firstName: "Ndahimana",
            lastName: "Bopheur",
            username: "nd154",
            email: "ndahimana154@gmail.com",
            phone: "0788923011",
            password: await hashPassword("password123"),
        },
    ];
    await User.deleteMany();
    await User.insertMany(users);
};

export default seedUsers;