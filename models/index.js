// import all models
const Truck = require('./Truck');
//const truck = require('./Truck');
const User = require('./user');
const Post = require('./Post');
//const Category = require('./Category');
const sequelize = require('../config/connection');
console.log("User", User),
// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// User.belongsToMany(Truck, {
//   //through: Truck,
//   as: 'post',
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Vote.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Post.belongsTo(Truck), no Post model
Post.belongsTo(Truck, {
  through: 'post',
  foreignKey: 'truck_id',
  onDelete: 'SET NULL'
});

Truck.hasMany(Post, {
  foreignKey: 'truck_id'
});

// replace vote with
// User.hasMany(Truck, {
//   as: 'rating',
//   foreignKey: 'user_id'
// });

// Truck.hasMany(Rating, {
//   foreignKey: 'post_id'
// });

// Rating.belongsTo(User, {
//   as: 'rating',
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

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

module.exports = { User, Truck, Post };