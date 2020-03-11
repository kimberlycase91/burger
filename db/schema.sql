DROP DATABASE IF EXISTS burgers_db;
-- Create the burgers_db.
CREATE DATABASE burgers_db;
-- Switch to or use the burgers_db.
USE burgers_db;
-- Create a burgers table with these fields:
CREATE TABLE burgers (
id INT auto_increment,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id)
);