import jwt from "jsonwebtoken";
import { userModel } from "../../db/models/user.model.js"; 
import AppError from "../utils/AppError.js";

export const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return next(new AppError("Authorization token missing or invalid.", 401));
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return next(new AppError("Invalid token.", 401));
        }

        const user = await userModel.findById(decoded.id);
        if (!user) {
            return next(new AppError("User not found.", 404));
        }

        req.userId = user._id;
        req.user = user;

        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return next(new AppError("Token has expired.", 401));
        }
        next(error);
    }
};
