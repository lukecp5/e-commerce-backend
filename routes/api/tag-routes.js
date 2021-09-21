const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tagData = await Tag.findAll()
  .then((tags)=>{
    console.log(tags)
  })
  .catch((err) => {
    res.json(err);
  });
  res.json(tagData);
});

router.get("/:id", (req, res) => {
	// find a single tag by its `id`
	const specificTag = Tag.findByPk(req.params.id, {
		 include:{
			
		 }
		})
	.then(retrievedTag => {
		res.json(retrievedTag);
	})

	// be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
