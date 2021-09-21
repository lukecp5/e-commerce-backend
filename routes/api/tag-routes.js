const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
	// find all tags
	// be sure to include its associated Product data
	await Tag.findAll({
		attributes: ["id", "tag_name"],
		include: [
			{
				model: Product,
				attributes: ["id", "product_name", "price", "stock", "category_id"],
				through: "ProductTag",
			},
		],
	})
		.then((parsedTagData) => {
			res.json(parsedTagData);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.get("/:id", (req, res) => {
	// find a single tag by its `id`
	const specificTag = Tag.findByPk(req.params.id, {
		 include:[
		 {
			model: Product,
			attributes: ["id", "product_name", "price", "stock", "category_id"],
			through: "ProductTag",
		 }
		]
		})
	.then(retrievedTag => {
		res.json(retrievedTag);
	})

	// be sure to include its associated Product data
});

router.post("/", (req, res) => {
	// create a new tag
	Tag.create({
		tag_name: req.body.tag_name,
	})
	.then((tag) => {
		res.json(tag);
	})
	.catch((err) => {
		res.json(err);
	})
});

router.put("/:id", (req, res) => {
	// update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
	// delete on tag by its `id` value
});

module.exports = router;
