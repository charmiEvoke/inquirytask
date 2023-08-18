const express = require('express');
const bodyParser = require('body-parser');
 const { Sequelize } = require('sequelize');
 const productRoutes = require('./routes/product');
 product = require('./routes/product');
 const cors = require('cors');
const app = express();

// Use the cors middleware to allow all origins
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // This is necessary for cookies, authorization headers, etc.
}));

// Create a Sequelize instance and connect to MySQL
const sequelize = new Sequelize('travelopia', 'charmi', 'c1c15194', {
  host: 'db4free.net',
  dialect: 'mysql',
});

// Define your Product model
// const Product = sequelize.define('product', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   price: {
//     type: Sequelize.FLOAT,
//     allowNull: true,
//   },
//   unit_of_measurement: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
// });

// Sync the model with the database
sequelize.sync().then(() => {
  console.log('Database synced');
});

app.use( bodyParser.json() );  // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

app.set('sequelize', sequelize);
// Use your product routes
// app.use('dbmodels/product_model.js', product);

app.use('/api/product',product);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = sequelize;
