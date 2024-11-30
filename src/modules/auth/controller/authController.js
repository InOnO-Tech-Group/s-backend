import { generateOTP, hashPassword } from "../../../helpers/authHelpers.js";
import { sendEmail } from "../../../services/sendEmail.js";
import authRepository from "../repository/authRepository.js";

const forgotPassword = async (req, res) => {
    try {
        const OTP = await generateOTP();
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
            "Password change completed",
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
};
