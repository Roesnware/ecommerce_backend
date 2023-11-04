// import modules 
const router = require('express').Router();
const apiRoutes = require('./api');

// use api routes
router.use('/api', apiRoutes);

// bad req 
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// export module 
module.exports = router;