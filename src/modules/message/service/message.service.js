import { messageModel } from "../../../../db/models/message.model.js";
import { userModel } from "../../../../db/models/user.model.js";
import AppError from "../../../utils/AppError.js";

export const getAllMessages = async (req, res, next) => {
    try {
        const { messageText, receivedId } = req.body;

        const existUser = await userModel.findById(receivedId);
        if (!existUser) {
            return next(new AppError("User not found.", 404));
        }

        const message = await messageModel.create({ messageText, receivedId });

        existUser.messages.push(message._id);
        await existUser.save();

        res.status(200).json({ message: "Message added successfully.", data: message });
    } catch (error) {
        next(error);
    }
};

export const sendMessage = async (req, res, next) => {
    try {
        const userId = req.userId;

        const userMessages = await userModel
            .findById(userId)
            .select("-_id messages")
            .populate("messages");

        if (!userMessages) {
            return next(new AppError("User not found.", 404));
        }

        res.status(200).json({ message: "Messages fetched successfully.", data: userMessages.messages });
    } catch (error) {
        next(error);
    }
};

export const deleteMessage = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userId = req.userId;

        const message = await messageModel.findByIdAndDelete(id);
        if (!message) {
            return next(new AppError("Message not found.", 404));
        }

        const user = await userModel.findById(userId);
        if (user) {
            user.messages = user.messages.filter((msgId) => msgId.toString() !== id);
            await user.save();
        }

        res.status(200).json({ message: "Message deleted successfully." });
    } catch (error) {
        next(error);
    }
};
