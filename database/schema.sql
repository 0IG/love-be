DROP DATABASE IF EXISTS love;

CREATE DATABASE love;

\c love;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    profileImg TEXT,
    address TEXT,
    zipcode INT,
    rating INT,
    customerType TEXT NOT NULL,
    admin BOOLEAN DEFAULT false,
    joinedDate TIMESTAMP DEFAULT NOW()
);

DROP TABLE IF EXISTS photos;
CREATE TABLE photos (
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    url TEXT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);