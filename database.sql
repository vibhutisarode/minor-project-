CREATE DATABASE student_scheduler;

USE student_scheduler;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    contact_number VARCHAR(15),
    branch VARCHAR(50),
    password VARCHAR(255)
);

