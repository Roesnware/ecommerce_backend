// import sequelize
const { Model, DataTypes } = require('sequelize');

// import conenection
const sequelize = require('../config/connection.js');

// class extends model
class Tag extends Model {}

// class constructor
Tag.init(
  {
    // define columns
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// export module 
module.exports = Tag;