// import modules 
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get req to get all tags
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  // try 
  try {
    // get all tags 
    const allTags = await Tag.findAll({
      include: [{ model: Product }, { model: ProductTag }],
    });

    // no tags in db
    if (!allTags) {
      res.status(400).json({ message: "No tags found!" })
    }

    // success
    res.status(200).json(allTags);
  }
  // bad req server side
  catch (err) {
    res.status(500).json(err);
  }
});

// get req to get specific tag by id 
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

  // try  
  try {
    // find tag by id 
    const tagById = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }, { model: ProductTag }]
    });

    // no tag found 
    if (!tagById) {
      res.status(400).json({ message: "No Tag found with this id!" })
    }

    // success 
    res.status(200).json(tagById);
  }
  // bad req server
  catch (err) {
    res.status(500).json(err);
  }
});

// post req to create tag
router.post('/', async (req, res) => {
  // create a new tag

  // try
  try {
    // create new tag
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  }

  // bad req client side 
  catch (err) {
    res.status(400).json(err);
  }
});

// put req to update tag by id 
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value

  //try
  try {

    const updateThisTag = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id
        }
      });

    // bad req client side 
    if (!updateThisTag) {
      res.status(400).json({ message: 'No tag found with this id!' });
    }

    res.status(200).json(updateThisTag);
  }
  // bad req server side 
  catch (err) {
    res.status(500).json(err);
  }
});

// delete req to delete tag by id 
router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value

  // try 
  try {
    // delete tag by id from req 
    const deleteThisTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    // no tag found with id 
    if (!deleteThisTag) {
      res.status(400).json({ message: 'No tag found with this id!' });
    }

    // success
    res.status(200).json(deleteThisTag);
  }
  // bad req server side 
  catch (err) {
    res.status(500).json(err);
  }
});

// epxort module 
module.exports = router;
