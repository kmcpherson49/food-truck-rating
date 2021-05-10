// import all models
const Truck = require('./Truck');
//const truck = require('./Truck');
const User = require('./User');
//const Category = require('./Category');
const sequelize = require('../config/connection');

// create associations
User.hasMany(Truck, {
  as: 'post',
  foreignKey: 'user_id'
});

Truck.belongsTo(User, {
  as: "post",
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Truck, {
  //through: Truck,
  as: 'post',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// Vote.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Post.belongsTo(Truck), no Post model
Truck.belongsTo(Truck, {
  through: 'post',
  foreignKey: 'truck_id',
  onDelete: 'SET NULL'
});

Truck.hasMany(Truck, {
  foreignKey: 'post'
});

// replace vote with
User.hasMany(Truck, {
  as: 'rating',
  foreignKey: 'user_id'
});

Truck.hasMany(Truck, {
  through: 'post',
  as: 'rating',
  foreignKey: 'post_id'
});

Truck.belongsTo(User, {
  as: 'rating',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Comment, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Post.hasMany(Comment, {
//   foreignKey: 'post_id'
// });

module.exports = { User, Truck };