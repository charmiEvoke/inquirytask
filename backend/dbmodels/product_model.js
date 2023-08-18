const { Sequelize, DataTypes } = require("sequelize");
const express = require('express');
const router = express.Router();



var Product ;

const sequelize = new Sequelize('travelopia', 'charmi', 'c1c15194', {
  host: 'db4free.net',
  dialect: 'mysql',
});
    

sequelize.sync().then(() => {
  console.log('Database synced');
});
// Get the Sequelize instance from app.js

    
    // Define a User model using Sequelize
    
    Product = sequelize.define('product', {
  country: { type: DataTypes.STRING, defaultValue: null },
  budget: { type: DataTypes.STRING, defaultValue: null },
  travellers: { type: DataTypes.FLOAT, defaultValue: null },
  interest: { type: DataTypes.STRING, defaultValue: null },
  email: { type: DataTypes.STRING, defaultValue: null },
 fullName: { type: DataTypes.STRING, defaultValue: null },
 gender: { type: DataTypes.STRING, defaultValue: null },

phoneNumber: { type: DataTypes.STRING, defaultValue: null },

timeLine: { type: DataTypes.FLOAT, defaultValue: null },

tripDuration: { type: DataTypes.STRING, defaultValue: null },

tripStatus: { type: DataTypes.STRING, defaultValue: null }

});



  console.log("Product  1 " + Product)


console.log("Product  2  " + Product)
module.exports = Product;

