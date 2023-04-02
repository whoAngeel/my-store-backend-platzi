const express = require("express");
const productService = require("../services/product.service");

const router = express.Router();
const service = new productService();

router.get("/", async (req, res) => {
	const productos = await service.find();
	res.json(productos);
});

router.get("/filter", async (req, res) => {
	res.send("yo soy un filter");
});

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const product = await service.findOne(id);
		res.json(product);
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req, res) => {
	const body = req.body;
	const newProduct = await service.create(body);
	res.json({ msg: "created", data: newProduct });
});

router.patch("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const product = await service.patch(id, body);
		res.json(product);
	} catch (error) {
		next(error);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const response = await service.delete(id);
		res.json(response);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
