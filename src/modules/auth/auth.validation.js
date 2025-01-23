import Joi from 'joi';
export const signUpValidatSchema = Joi.object({
    name: Joi.string().min(2).max(3).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'online'] } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,8}$')).required(),
    confirmedPassword:Joi.string().valid(Joi.ref("password")).required,
}).options({allowUnknown:false})


export const signInValidaSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'online'] } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,8}$')).required(),
})