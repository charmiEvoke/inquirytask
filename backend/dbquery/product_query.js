const { Op } = require('sequelize');
const sequelize = require('sequelize-connection'); // Import your Sequelize connection instance
const Product = require('../dbmodels/product_model.js'); // Import your Sequelize model for "product"

class Query {
  constructor(options) {
    // this.options = options || {};
  }

  async getAllData() {
    try {
      console.log("product"  + Product)
      var res=  Product.findAll();
      console.log("res",res);
      return res
    } catch (error) {
      throw error;
    }
  }

  async addNew(data) {
    try {
      return await Product.create(data);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new Query();
