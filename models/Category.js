// import sequelize 
const { Model, DataTypes } = require('sequelize');

// import connection 
const sequelize = require('../config/connection.js');

// class extends model
class Category extends Model {}

// class constructor 
Category.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// export module 
module.exports = Category;