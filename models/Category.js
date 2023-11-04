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
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
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