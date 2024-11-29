import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}

export const generateOTP = async () => {
    const otp = Math.floor(Math.random() * 900000) + 100000;

    return otp.toString();
}
