import authRepository from "../modules/auth/repository/authRepository.js"
export const isUserExistsByEmail = async (req, res, next) => {
    try {
        const user = await authRepository.findUserByAttribute("email", req.body.email);
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "User not found"
            });
        }

        req.user = user;
        return next();
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
}

export const isUserExistsById = async (req, res, next) => {
    try {
        const user = await authRepository.findUserByAttribute("_id", req.body.userId);
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "User not found"
            });
        }

        req.user = user;
        return next();
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
}

export const isOTPValid = async (req, res, next) => {
    try {
        const session = await authRepository.findSessionBy2Attributes("userId", req.body.userId, "content", req.body.OTP);
        if (!session) {
            return res.status(404).json({
                status: 404,
                message: "Invalid OTP!"
            });
        }

        req.session = session;
        return next()
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
}