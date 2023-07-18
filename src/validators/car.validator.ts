import Joi from 'joi';

export const carSchema = Joi.object({
    brand: Joi.string()
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)
        .required()
        .messages({
            'string.base': 'Brand must be a string',
            'string.pattern.base': 'Brand must contain only letters',
            'string.maxLength': 'Brand must be at most 20 characters long',
            'string.minLength': 'Brand must be at least 1 character long',
            'any.required': 'Brand is required',
        }),
    price: Joi.number()
        .integer()
        .min(0)
        .max(1000000)
        .required()
        .messages({
            'number.base': 'Price must be a number',
            'number.integer': 'Price must be an integer',
            'number.min': 'Price must be at least 0',
            'number.max': 'Price must be at most 1,000,000',
            'any.required': 'Price is required',
        }),
    year: Joi.number()
        .integer()
        .min(1990)
        .max(2023)
        .required()
        .messages({
            'number.base': 'Year must be a number',
            'number.integer': 'Year must be an integer',
            'number.min': 'Year must be at least 1990',
            'number.max': 'Year must be at most 2023',
            'any.required': 'Year is required',
        }),
});
