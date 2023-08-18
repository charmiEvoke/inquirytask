const express = require('express');
const router = express.Router();
const dbQuery = require('../dbquery/product_query');
const { Sequelize, DataTypes } = require('sequelize');
const Product = require('../dbmodels/product_model.js');


const sequelize = new Sequelize('travelopia', 'charmi', 'c1c15194', {
  host: 'db4free.net',
  dialect: 'mysql',
});


router.get('/', async (req, res, next) => {
  //  res.send({success:true,data:"hello"})
   console.log("asdadnsanajsns");
   dbQuery.getAllData().then(res2=>{
    console.log("res2" +res2);
    res.send({success:true,data:res2})
   })

 
});

  router.post('/add', async (req, res) => {
    try {
      const data = req.body; // Assuming data is sent in the request body
      console.log("data======== ",data);
      const newRecord = await Product.create(data);
  
      res.json({ message: 'Record added successfully', data: newRecord });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while adding the record' });
    }
  });

module.exports = router;
