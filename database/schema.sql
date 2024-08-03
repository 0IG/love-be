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
    address TEXT NOT NULL,
    zipcode INT,
    customerType TEXT NOT NULL,
    admin BOOLEAN DEFAULT false,
    region TEXT NOT NULL,
    province TEXT NOT NULL,
    city TEXT NOT NULL,
    town TEXT NOT NULL,
    dob TEXT NOT NULL,
    firebase_id INT,
    joinedDate TIMESTAMP DEFAULT NOW()
);

DROP TABLE IF EXISTS photos;
CREATE TABLE photos (
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    url TEXT NOT NULL,
    user_id INT NOT NULL
);

DROP TABLE IF EXISTS relationships;
CREATE TABLE relationships (
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    user_id INT NOT NULL,
    partner_id INT NOT NULL,
    status TEXT NOT NULL
);

DROP TABLE IF EXISTS locations;
CREATE TABLE locations (
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    lat TEXT NOT NULL,
    lng TEXT NOT NULL
);

DROP TABLE IF EXISTS board;
CREATE TABLE board (
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    owner_id INT NOT NULL,
    constributors_id INT[],
    title TEXT NOT NULL,
    description TEXT NOT NULL
);