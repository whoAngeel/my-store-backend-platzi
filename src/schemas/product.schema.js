const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(17);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();
const description = Joi.string().min(10);
const categoryId = Joi.number().integer();

const createProductSchema = Joi.object({
	name: name.required(),
	price: price.required(),
	image: image.required(),
	description: description.required(),
	categoryId: categoryId.required(),
});

const updateProductSchema = Joi.object({
	name,
	price,
	image,
	description,
	categoryId,
});

const getProductSchema = Joi.object({
	id: id.required(),
});

module.exports = {
	createProductSchema,
	updateProductSchema,
	getProductSchema,
};
