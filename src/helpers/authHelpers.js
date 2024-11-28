import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const { sign } = jwt;

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}
export const comparePassword = async (password, userPassword) => {
    return await bcrypt.compare(password, userPassword);
  };
  export const generateOTP = (id) => {
    const currentTime = new Date().getTime().toString();
    counter = (counter + 1) % 1000000;
    const counterPart = counter.toString().padStart(6, '0');
    const combined = id.toString() + currentTime + counterPart;
    const uniqueChars = new Set(combined);
  
    let otp = Array.from(uniqueChars).join('').substring(0, 6);
  
    while (otp.length < 6) {
      const additionalRandom = Math.floor(Math.random() * 10).toString();
      if (!otp.includes(additionalRandom)) {
        otp += additionalRandom;
      }
    }
  
    while (otp[0] === '0') {
      otp = otp.slice(1) + Math.floor(Math.random() * 9 + 1).toString();
    }
  
    return otp;
  };
  
  export const generateToken = (id) => {
    return sign({ id: id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
  