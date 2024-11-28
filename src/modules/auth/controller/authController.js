import { sendEmail } from "../../../services/sendEmail.js"

const forgotPassword = async (req, res) => {
    try {
        await sendEmail(req.user.email, "Forgot passsowrd", "Here is your otp");
        return res.status(200).json({
            status: 200,
            message: "Email sent successfully"
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}

export default {
    forgotPassword
}