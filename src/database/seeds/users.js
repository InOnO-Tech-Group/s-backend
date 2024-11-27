import { hashPassword } from "../../helpers/authHelpers.js";
import User from "../models/users.js";

const seedUsers = async () => {
    const users = [
        {
            firstName: "John",
            lastName: "Doe",
            username: "john1",
            email: "john@example.com",
            phone: "0788888887",
            password: await hashPassword("password123"),
        },
        {
            firstName: "Jane",
            lastName: "Doe",
            username: "jane1",
            email: "jane@example.com",
            phone: "0788888888",
            password: await hashPassword("password123"),
        },
    ];
    await User.deleteMany();
    await User.insertMany(users);
};

export default seedUsers;