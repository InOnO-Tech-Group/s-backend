import httpStatus from "http-status";
import { generateOTP, generateToken, hashPassword } from "../../../helpers/authHelpers.js";
import authRepository from "../repository/authRepository.js";
import { sendEmail } from "../../../services/sendEmail.js";

const sendLoginOTP = async (req, res) => {
    try {
        const userName = req.user.firstName || req.user.email.split("@")[0];

        const otp = await generateOTP(req.user._id);
        const session = await authRepository.saveSession({
            userId: req.user._id,
            content: otp,
        });
        await sendEmail(
            req.user.email,
            "Login OTP - ES Gishoma",
            `A new login was detected on your account and here is your OTP: <b>${otp}</b>.
                Please don't share with anyone.
            </p>`,
            "New login detected on your account",
            userName
        );
        return res.status(httpStatus.OK).json({
            status: httpStatus.OK,
            message: "Verify Login with OTP sent on your email",
            session
        });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
};

const userLoginVerify = async (req, res) => {
    try {
        const userId = req.session.userId
        const token = await generateToken(userId);

        await authRepository.deleteSession(req.session._id);

        const session = await authRepository.saveSession({
            userId: userId,
            content: token,
        })

        return res.status(httpStatus.OK).json({
            status: httpStatus.OK,
            message: "Logged in successfully .",
            session
        });

    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            status: httpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
};

const forgotPassword = async (req, res) => {
    try {
        const OTP = await generateOTP(req.user._id);
        const session = await authRepository.saveSession({
            userId: req.user._id,
            content: OTP,
        });

        const userName = req.user.firstName || req.user.email.split("@")[0];

        await sendEmail(
            req.user.email,
            "Forgot password",
            `<p>You have requested to reset your password. Here is your OTP: <b>${OTP}</b>. 
            Please do not share it with anyone.</p>`,
            "OTP for password reset",
            userName
        );

        return res.status(200).json({
            status: 200,
            message: "OTP Code sent successfully",
            session
        });
    } catch (error) {
        console.error("Error in forgotPassword:", error.message);
        res.status(500).json({
            status: 500,
            message: "An error occurred while processing your request.",
            error: error.message
        });
    }
};

const otpValidation = async (req, res) => {
    try {
        return res.status(200).json({
            status: 200,
            message: "OTP is Valid"
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "An error occurred while processing your request.",
            error: error.message
        });
    }
}

const resetPassword = async (req, res) => {
    try {
        const userName = req.user.firstName || req.user.email.split("@")[0];
        const updatedPassword = await authRepository.updateUser(req.user._id, {
            password: await hashPassword(req.body.password)
        })

        await authRepository.deleteSession(req.session._id);
        await sendEmail(
            req.user.email,
            "Password changed successfully",
            `<p>Your password is changed successfully, feel free to change it again in the case you forget it.`,
            "Password changed completely",
            userName
        );

        res.status(200).json({
            status: 200,
            message: "Password reset successfully",
            updatedUser: updatedPassword
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "An error occurred while processing your request.",
            error: error.message
        });
    }
}

export default {
    forgotPassword,
    otpValidation,
    resetPassword,
    sendLoginOTP,
    userLoginVerify
}
