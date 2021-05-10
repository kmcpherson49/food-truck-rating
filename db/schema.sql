DROP DATABASE IF EXISTS foodtruck_db;

CREATE DATABASE foodtruck_db;

USE foodtruck_db;

-- CREATE TABLE trucks(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY key,
--     name VARCHAR(50) NOT NULL,
--     rating VARCHAR(30), 
--     category_id 
-- );


-- CREATE TABLE categories(
--   id INTEGER NOT NULL,
--   category_name VARCHAR(30) NOT NULL
-- );

CREATE TABLE prices(
  id INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL
);
