const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
	const products = [];
	const { size } = req.query;
	const limit = size || 10;
	for (let i = 0; i < limit; i++) {
		products.push({
			name: faker.commerce.productName(),
			price: parseInt(faker.commerce.price()),
			image: faker.image.imageUrl(),
		});
	}
	res.json(products);
});

router.get('/filter', (req, res) => {
	res.send('yo soy un filter');
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	res.json({
		name: 'phone',
		price: 100,
		id,
	});
});

router.post('/', (req, res) => {
	const body = req.body;
	res.json({ msg: 'created', data: body });
});

router.patch('/:id', (req, res) => {
	const { id } = req.params;
	const body = req.body;
	res.json({
		msg: 'updated',
		data: body,
		id,
	});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	res.json({ msg: 'deleted', id });
});

module.exports = router;
