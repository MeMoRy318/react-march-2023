import Joi from 'joi';

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export const userSchema = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'Name is required.',
        'string.empty': 'Name cannot be empty.',
    }),
    username: Joi.string().required().messages({
        'any.required': 'Username is required.',
        'string.empty': 'Username cannot be empty.',
    }),
    email: Joi.string().required().pattern(emailRegex).messages({
        'any.required': 'Email is required.',
        'string.empty': 'Email cannot be empty.',
        'string.pattern.base': 'Email must be a valid email address.',
    }),
});
