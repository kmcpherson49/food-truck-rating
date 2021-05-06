DROP DATABASE IF EXISTS foodtruck_db;

CREATE DATABASE foodtruck_db;

USE inventory_db;

CREATE TABLE names(
    id INT NOT NULL AUTO_INCREMENT PRIMARY key,
    foodtruck_name VARCHAR(50) NOT NULL
);

CREATE TABLE rating(
  id INTEGER NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

CREATE TABLE categories(
  id INTEGER NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

CREATE TABLE prices(
  id INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL
);
