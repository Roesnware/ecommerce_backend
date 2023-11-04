// import module 
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get req to get all categories 
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products

  // try 
  try{
    // get all categories 
    const allCategories = await Category.findAll({
      include: [{ model: Product}]
    });

    // no categories in db
    if(!allCategories){
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

// get req to get category by id from req 
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  // try 
  try{
    // get category by id 
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    // no category found with id 
    if(!categoryById) {
      res.status(400).json({ message: "No category found with that id!"});
    }

    // success
    res.status(200).json(categoryById);
  }
  // catch err bad req server side 
  catch (err) {
    res.status(500).json(err);
  }
});

// post req to create new category 
router.post('/', async (req, res) => {
  // create a new category

  // try 
  try{
    // create category 
    const newCategory = await Category.create(req.body);

    // success
    res.status(200).json(newCategory);
  }

  // catch err on bad req client side 
  catch (err) {
    res.status(400).json(err);
  }
});

// put req to update category 
router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

// delete req to delete req 
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

// export module 
module.exports = router;
