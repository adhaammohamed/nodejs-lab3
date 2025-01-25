import joi from 'joi';
export const messageValidatSchema = joi.object({
    content: joi.string().min(2).max(3000).required(),
    receiver: joi.string().hex().length(24).required()
})