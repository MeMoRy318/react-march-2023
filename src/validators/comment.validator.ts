import Joi from 'joi';

export const schemaComment = Joi.object({
    postId: Joi.number().required().messages({
        'any.required': 'Post ID is required.',
        'number.base': 'Post ID must be a number.',
    }),
    name: Joi.string().required().messages({
        'any.required': 'Name is required.',
        'string.empty': 'Name cannot be empty.',
    }),
    email: Joi.string().required().pattern(new RegExp(/^\S+@\S+$/)).messages({
        'any.required': 'Email is required.',
        'string.empty': 'Email cannot be empty.',
        'string.pattern.base': 'Email must be a valid email address.',
    }),
    body: Joi.string().required().messages({
        'any.required': 'Body is required.',
        'string.empty': 'Body cannot be empty.',
    }),
});
