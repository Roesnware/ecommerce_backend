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
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: "product",
      referencesKey: "id"
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: "tag",
      referencesKey: "id"
    }
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
