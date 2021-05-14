//const seedCategory = require('./category-seeds');
const seedTruck = require('./truck-seeds');
const seedUser = require('./user-seeds');
const seedPost = require('./post-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  //await seedCategory();
  //console.log('--------------');

  await seedTruck();
  console.log('--------------');

  await seedUser();
  console.log('--------------');

  await seedPost();
  console.log('--------------');

  process.exit(0);
};

seedAll();
