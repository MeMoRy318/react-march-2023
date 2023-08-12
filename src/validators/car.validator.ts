import Joi from 'joi';

const schema = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).min(1).max(20).required().messages({
        'any.required': 'Brand is required.',
        'string.pattern.base': 'Brand must only contain valid characters.',
        'string.min': 'Brand must be at least {#limit} characters long.',
        'string.max': 'Brand cannot exceed {#limit} characters.',
    }),
    price: Joi.number().integer().min(0).max(1000000).required().messages({
        'any.required': 'Price is required.',
        'number.integer': 'Price must be an integer.',
        'number.min': 'Price must be at least {#limit}.',
        'number.max': 'Price cannot exceed {#limit}.',
    }),
    year: Joi.number().integer().min(1990).max(2023).required().messages({
        'any.required': 'Year is required.',
        'number.integer': 'Year must be an integer.',
        'number.min': 'Year must be at least {#limit}.',
        'number.max': 'Year cannot exceed {#limit}.',
    }),
});

export { schema };
