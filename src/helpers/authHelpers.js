import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}

export const generateOTP = async () => {
    const currentTime = Date.now();

    const randomNum = Math.floor(Math.random() * 100000);

    const combined = `${currentTime}${randomNum}`;

    const code = parseInt(combined.slice(-6));

    return code;
}
