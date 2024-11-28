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
        return res
    }
}