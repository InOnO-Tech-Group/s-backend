import { generateOTP } from "../../../helpers/authHelpers.js";
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
        return res.status(500).json({
            status: 500,
            message: "An error occurred while processing your request.",
            error: error.message
        });
    }
};

export default {
    forgotPassword,
};
