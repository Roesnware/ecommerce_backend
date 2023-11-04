// import sequelize
const { Model, DataTypes } = require('sequelize');

// import connection 
const sequelize = require('../config/connection');

// class extend model 
class ProductTag extends Model {}

// class constructor
ProductTag.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// export module 
module.exports = ProductTag;
