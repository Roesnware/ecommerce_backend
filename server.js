// import modules 
const express = require('express');
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection');

 // make instance of express
const app = express();

// port var 
const PORT = process.env.PORT || 3001;

// middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
