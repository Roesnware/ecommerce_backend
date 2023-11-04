const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products

  // try 
  try {
    // get all categories 
    const allCategories = await Category.findAll({
      include: [{ model: Product }]
    });

    // no categories in db
    if (!allCategories) {
      res.status(400).json({ message: "No Categories found!" });
    }

    // success
    res.status(200).json(allCategories);
  }
  // bad req server side 
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
